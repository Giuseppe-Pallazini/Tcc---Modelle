import './index.scss'
import '../../assets/common/index.scss'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import IconListaDesejo from '../../assets/image/lista-desejo.png'
import IconLupa from '../../assets/image/logo-lupa.png'

import { buscarPorNome, listarTodos, removerProduto, buscarImagem } from '../../api/produtoAPI'

import { API_URL } from '../../api/config.js';
import { useNavigate } from 'react-router-dom';


 

export default function Index(){
    const [produto, setProduto] = useState([]);
    const [modelo, setModelo] = useState([]);
    // const [filtro, setFiltro] = useState('');
    

    // async function filtrar(){
    //     const resp = await buscarPorNome(filtro);
    //     setProduto(resp)
    // }

    const navigate = useNavigate();


    useEffect(()  => {
        carregarProduto();
    }, [])

    async function carregarProduto(){
        const resp = await listarTodos();
        setProduto(resp); 
    }

    function mostrarImagem(imagem) {
        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }

        else if (typeof (imagem) == 'string') {
            return `${API_URL}/${imagem}`
        }

        else {
            return buscarImagem(imagem)
        }
    }

    function formatarPreco(preco){
        return preco.toFixed(2);
    }

    function abrirDetalhes(id){
        navigate(`/user/destalheProduto/${id}`)
    }



    return(
        <main className='main-menu-produtos'>

        {/* <div className='div-input-buscar'>
                <input type='text' className='gerenciarProd-input-buscar' placeholder='Buscar' value={filtro} onChange={e => setFiltro(e.target.value)} />
                <img src={IconLupa} alt='logo' className='logo-buscar' onClick={filtrar} />
            </div> */}

            {produto.map(item => 
                <div className='card-produto' onClick={() => abrirDetalhes(item.produto)}>
                    <div className='icon-lista'>
                        <img src={IconListaDesejo} alt='' className='icon-lista-desejo' />                
                        <img src={mostrarImagem(item.ds_imagem)}  alt='imagem' className='gerenciarProd-imagem-card-1' />
                    </div>

                    <div className='card-info' >
                        <p className='card-info-nome' > {item.nome}</p>

                        <p className='card-info-complemento' >{item.complementoProduto}</p>
                    
                        <p className='card-info-preco' >R$ {formatarPreco(item.preco)}</p>
                    </div>
                </div>
            )}  
        </main>
    )
}