import './index.scss'
import '../../assets/common/index.scss'

import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import LogoRemover from '../../assets/image/logo-remover.svg'
import LogoEditar from '../../assets/image/logo-editar.svg'
import IconLupa from '../../assets/image/logo-lupa.png'
import { Link } from 'react-router-dom';

import ImagemCard from '../../assets/image/imagem-card.png'
import { buscarPorNome, listarTodos, removerProduto, buscarImagem } from '../../api/produtoAPI'

import { API_URL } from '../../api/config.js';


 

export default function Index(){
    const [produto, setProduto] = useState([]);
    const [modelo, setModelo] = useState([]);
    const [filtro, setFiltro] = useState('');
    

    async function filtrar(){
        const resp = await buscarPorNome(filtro);
        setProduto(resp)
    }

    useEffect(()  => {
        carregarProduto();
    }, [])

    async function carregarProduto(){
        const resp = await listarTodos();
        setProduto(resp); 
    }

    async function deletarProduto(id){
        try {
           await removerProduto(id);
           await carregarProduto();
            toast.dark('Produto removido com sucesso!')
        } catch (err) {
            console.log(err);
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

    const navigate = useNavigate()
    
        async function editarProduto(id){
            navigate(`/admin/cadastroproduto/${id}`);
            //navigate(`/admin/produto/alterar/${id}`)
        }

        function formatarPreco(preco){
            return preco.toFixed(2);
        }
        


    return(
        <main className='main-menu-produtos'>

        <div className='div-input-buscar'>
                <input type='text' className='gerenciarProd-input-buscar' placeholder='Buscar' value={filtro} onChange={e => setFiltro(e.target.value)} />
                <img src={IconLupa} alt='logo' className='logo-buscar' onClick={filtrar} />
            </div>

            {produto.map(item => 
                <div className='gerenciarProd-card-1'>
                        <div className='gerenciarProd-div-icons'>
                                    <img src={LogoRemover} alt='logo' className='logo-remover' onClick={() => deletarProduto(item.produto)} />
                                    <div>
                                        <img src={LogoEditar} alt='logo' className='logo-editar' onClick={() => editarProduto(item.produto)} />
                                    </div>
                                </div>
                                <img src={mostrarImagem(item.ds_imagem)}  alt='imagem' className='gerenciarProd-imagem-card' />
                                <h1 className='marca-produto-card'> 
                                        <p> {item.nome} </p>
                                </h1>
                                <p className='descricao-produto-card'> {item.complementoProduto}  </p>
                                
                                <div className='gerenciarProd-div-preco'>
                                    <p className='preço-produto-card'> R$</p>
                                    <p className='valor-produto-card'> {formatarPreco(item.preco)}</p>
                                </div>

                                <div className='gerenciarProd-div-cor' >
                                    <p className='cor-produto-card'> Cor </p>
                                    <p className='valorCor-produto-card'> {item.cor} </p>
                                </div>
                                
                                <div className='gerenciarProd-div-modelo' >
                                    <p className='modelo-produto-card'> Modelo </p>
                                    <p className='valorModelo-produto-card'> 
                                        {item.idModelo}
                                    </p>
                                </div>

                                <div className='gerenciarProd-div-tamanhos' >
                                    <p className='tamanho-produto-card'> Tamanho </p>
                                    <div className='valorTamanho-produto-card'>
                                        <p className='tamanhoProduto-card'> {item.idTamanho} </p>
                                    </div>
                                </div>


                                
                                <div className='gerenciarProd-div-disponivel' >
                                    <p className='disponivel-produto-card'> disponibilidade </p>
                                    <p className='valorDisponivel-produto-card'> {item.disponibilidade} </p>
                                </div>

                                <div className='gerenciarProd-div-categoria' >
                                    <p className='categoria-produto-card'> Categoria </p>
                                    <p className='valorCategoria-produto-card'> {item.idCategoria} </p>
                                </div>

                                <div className='gerenciarProd-div-genero' >
                                    <p className='genero-produto-card'> Marca </p>
                                    <p className='valorMasculino-produto-card'> {item.idMarca} </p>
                                </div>

                                <div className='gerenciarProd-div-id' >
                                    <p className='id-produto-card'> ID: </p>
                                    <p className='valorId-produto-card'> {item.produto} </p>
                                </div>
                            </div>
            )}  
        </main>
    )
}