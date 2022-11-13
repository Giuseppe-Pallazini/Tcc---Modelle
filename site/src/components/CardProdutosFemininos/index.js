import './index.scss'
import '../../assets/common/index.scss'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import IconListaDesejo from '../../assets/image/lista-desejo.png'
import IconLupa from '../../assets/image/logo-lupa.png'
import LogoValorFiltro from '../../assets/image/logo-valor-filtro.png'

import { buscarPorNome, listarTodos, removerProduto, buscarImagem, listarProdutosMasculino, listarProdutosFemininos } from '../../api/produtoAPI'

import { API_URL } from '../../api/config.js';
import { useNavigate } from 'react-router-dom';


 

export default function Index(){
    const [produto, setProduto] = useState([]);
    const [modelo, setModelo] = useState([]);
    const [filtro, setFiltro] = useState('');

    const navigate = useNavigate();




    async function carregarProduto(){
        const resp = await listarProdutosFemininos();
        setProduto(resp); 
    }

    useEffect(()  => {
        carregarProduto();
    }, [])

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
        navigate(`/user/detalhesProduto/${id}`)
    }


    return(
        <main className='main-menu-produtos'>
            
            <div className='section-filtro'>
                <div className='div-filtroRoupas'>
                                <div className='filtro-titulo'>
                                    <h1>Filtrar por: </h1>
                                </div>

                                <div className='filtro-marca'>
                                    <div className='div-tituloMarcas'>
                                        <h1>Marcas: </h1>
                                    </div>

                                    <div className='div-valoresMarcas'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p>Gucci</p>
                                    </div>
                                    
                                    <div className='div-valoresMarcas'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p>Balenciaga</p>
                                    </div>

                                    <div className='div-valoresMarcas'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p>Dolce & Gabbana</p>
                                    </div>

                                    <div className='div-valoresMarcas'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p>Burberry</p>
                                    </div>

                                    <div className='div-valoresMarcas'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p>Morley</p>
                                    </div>

                                    <div className='div-valoresMarcas'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p>Kenzo</p>
                                    </div>

                                    <div className='div-valoresMarcas'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p>Modelle</p>
                                    </div>

                                    <div className='div-valoresMarcas'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p >Zegna</p>
                                    </div>

                                    <div className='div-valoresMarcas'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p >Louis Vuitton</p>
                                    </div>

                                    <div className='div-valoresMarcas'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p  >Versace</p>
                                    </div>

                                    <div className='div-valoresMarcas'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p>Prada</p>
                                    </div>
                                </div>

                                <div className='div-filtroCores'>
                                    <div className='div-tituloCoresPrinciapis'>
                                        <h1>Cores principais</h1>
                                    </div>

                                    <div className='div-inputsCores'>
                                        <input type='color'/>
                                        <input type='color'/>
                                        <input type='color'/>
                                        <input type='color'/>
                                        <input type='color'/>
                                        <input type='color'/>
                                        <input type='color'/>
                                        <input type='color'/>
                                    </div>
                                </div>

                                <div className='filtro-Tamanho'>
                                    <div className='div-tituloTamanho'>
                                        <h1>Tamanho: </h1>
                                    </div>

                                    <div className='div-valoresTamanho'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p> XS / PP </p>
                                    </div>
                                    
                                    <div className='div-valoresTamanho'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p> S / P </p>
                                    </div>

                                    <div className='div-valoresTamanho'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p > M / M</p>
                                    </div>
                                    <div className='div-valoresTamanho'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p> L / G</p>
                                    </div>

                                    <div className='div-valoresTamanho'>
                                        <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                                        <p> XL / GG</p>
                                    </div>
                                </div>

                                <div className='filtro-roupas'>
                                    <div className='div-tituloroupasDisponiveis' >
                                        <h1>Roupas</h1>
                                    </div>

                                    <div className='div-roupasDisponiveis'>
                                        <p>Camisa (4)</p>
                                    </div>
                                    <div className='div-roupasDisponiveis'>
                                        <p>Calças (6)</p>
                                    </div>
                                    <div className='div-roupasDisponiveis'>
                                        <p>Moletons (5)</p>
                                    </div>
                                    <div className='div-roupasDisponiveis'>
                                        <p>Casacos / Jaquetas (8)</p>
                                    </div>
                                    <div className='div-roupasDisponiveis'>
                                        <p>Shorts e Bermudas (3)</p>
                                    </div>
                                    <div className='div-roupasDisponiveis'>
                                        <p>Polos (15)</p>
                                    </div>
                                    <div className='div-roupasDisponiveis'>
                                        <p>Suéters (11)</p>
                                    </div>
                                    <div className='div-roupasDisponiveis'>
                                        <p>Blusas (4)</p>
                                    </div>
                                </div>
                            </div>
                </div>

            <div className='section-card' >
                {produto.map(item => 
                    <div className='card-produto' onClick={() => abrirDetalhes(item.produto)}>
                        <div className='icon-lista'>
                            <img src={IconListaDesejo} alt='' className='icon-lista-desejo' />                
                            <img src={mostrarImagem(item.ds_imagem)}  alt='imagem' className='gerenciarProd-imagem-card-1' />
                        </div>

                        <div className='card-info' >
                            <p className='card-info-nome' > {item.nome}</p>

                            <p className='card-info-complemento' >{item.complementoProduto}</p>
                        
                            <p className='card-info-preco' >R$ {formatarPreco(item.preco * 1)}</p>
                        </div>
                    </div>
                )}  
            </div>
        </main>
    )
}