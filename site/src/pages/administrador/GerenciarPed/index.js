import CabecalhoAdm from '../../../components/cabecalhoadm'

import './index.scss'
import LogoLupa from '../../../assets/image/logo-lupa.png'
import '../../../assets/common/index.scss'
import {useEffect, useState} from 'react'
import { alterarStatus, verPedidos, visualizarPedido } from '../../../api/produtoAPI'
import CardPedidos from '../../../components/cardPedidosAdmin'
import { toast } from 'react-toastify'

export default function Index(){
    const [produto, setProduto] = useState([]);
    const [status, setStatus] = useState();
    const [id, setId] = useState();

    async function carregarUsuario(){
        let a = await visualizarPedido();
        setProduto(a)
        }

    async function listarPedidos(){
        let a = await verPedidos();
        setProduto(a);
    }

    async function funcaoAlterarStatus(){
        try {
            const a = await alterarStatus(produto[id].idPedido, status)
            toast.update("Status alterado com sucesso");
            carregarUsuario()
            
        } catch (err) {
            toast.error(err.response.data.erro);
            console.log(err)
        }

    }



    useEffect(() =>{
        listarPedidos();
        carregarUsuario()
    })


    
    return(
        <main className='main-gerenciar'>
        <CabecalhoAdm />         

        <div className='div-filtro-buscarAdm'>
            <input placeholder='Buscar'/><img className='' src={LogoLupa} alt='logoLupa' /> 
        </div>

        <div>
                            <h1 className='h1-alte'>Alterar Status</h1>
                            <div>
                                <input className='input-status' type='text' value={status} placeholder='Status' onChange={e => setStatus(e.target.value)} />
                                <input className='input-id' type='text' value={id} placeholder='ID pedido' onChange={e => setId(e.target.value)} />
                                <button onClick={funcaoAlterarStatus}>Ok</button>
                            </div>
                        </div>

        <section className='section-tables'>
            <CardPedidos />
        </section>
    </main> 
    );
}