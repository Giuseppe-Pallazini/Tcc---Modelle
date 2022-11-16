import './index.scss'
import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'
import CabecalhoAdm from '../../../components/cabecalhoadm'
import { toast } from 'react-toastify';

import Logolixeira from '../../../assets/image/logo-lixeira.png'
import LogoLupa from '../../../assets/image/logo-lupa.png'
import { buscarUsuario, listarUsuarios, removerUsuario } from '../../../api/usuarioAPI'

import '../../../assets/common/index.scss'
import {useEffect, useState} from 'react'

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default function Index(){
    const [produto,setProduto] = useState([]);
    const [filtro, setFiltro] = useState();
    
    async function getUsuarios(){
        const resp = await listarUsuarios()
        setProduto(resp);
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    async function filtrar(){
        try {
            const r = await buscarUsuario(filtro);
            setProduto(r)
        } catch (error) {
            console.log(error)
        }

    }

    async function deletarUsuario(id, nome){
        try{
        confirmAlert({
            title: ' Remover Usuario',
            message: `Confirmar remoção do ${nome}`,
            buttons: [
                {
                    label: 'sim',
                    onClick: async () => {
                        const resposta = await removerUsuario(id);
                        await getUsuarios();
                        toast.dark('Usuario removido com sucesso!')
                    }
                },
                {
                    label: 'não'
                }
            ]
        })
    
    }
    catch(err){
        console.log(err)
    }
    }
   
    return(
       <main className='main-gerenciar'>
            <CabecalhoAdm />         

            <div className='div-filtro-buscarAdm'>
                <input value={filtro} onChange={e => setFiltro(e.target.value)} placeholder='Buscar'/>
                <img className='' src={LogoLupa} alt='logoLupa' onClick={filtrar} /> 
            </div>

            <section className='section-tables'>
                <div className='gerenciar-h1'>
                    <h1>Usuarios</h1>
                </div>
                <div>
                    <table className='gerenciar-table'>
                        <thead className='gereciar-thead-table'>
                            <tr className='gereciar-tr-titulo'>
                                <th>USUARIO</th>
                                <th>E-MAIL</th>
                                <th>Dt. Nascimento</th>
                                <th>Número</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='gereciar-tbody'>
                        {produto.map(item =>
                                <tr className='gereciar-tr'>
                                    <td className='gereciar-td' > {item.nome}</td>
                                    <td className='gereciar-td' > {item.email}</td>                               
                                    <td className='gereciar-td' > {item.dataNascimento.substr(0,10)}</td>
                                    <td className='gereciar-td' > {item.telefone}</td>
                                    <td>
                                        &nbsp;&nbsp;
                                        <img onClick={() => deletarUsuario(item.usuario, item.nome)} src={Logolixeira} alt='remover' />
                                    </td>
                                </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </section>
        </main> 
    );
}