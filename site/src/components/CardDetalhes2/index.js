
import { API_URL } from '../../api/config.js';

import { useEffect, useState } from 'react'

import { buscarImagem,listarTodos2 } from '../../api/produtoAPI';

import { useNavigate } from "react-router-dom";
import './index.scss'
import {toast} from 'react-toastify'


export default function Index(){
    const [produto, setProduto] = useState([]);

    const navigate = useNavigate();

    async function carregarProduto(){
        const resp = await listarTodos2();
        setProduto(resp); 
    }

    useEffect(()  => {
        carregarProduto();
    }, [])


    function abrirDetalhes(id){
        if(id === undefined || !id){
            toast.dark("Produto Invalido")
        }
        else{
        navigate(`/user/detalhesProduto/${id}`)
        document.location.reload(true);
    }
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

    return(
        <div className='section-card' >
                <div className='card-produto' onClick={() => abrirDetalhes(produto.produto)}>
                    <div className='icon-lista'>          
                        <img src={mostrarImagem(produto.ds_imagem)}  alt='imagem' className='gerenciarProd-imagem-card-1' />
                    </div>

                    <div className='card-info' >
                        <p className='card-info-nome' > {produto.nome}</p>

                        <p className='card-info-complemento' >{produto.complementoProduto}</p>
                    
                        <p className='card-info-preco' >R$ {produto.preco}</p>
                    </div>
                </div>
        </div>
    )
}