import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import './index.scss';
import '../../../assets/common/index.scss'

import ImagemMeusPedidos from '../../../assets/image/logo-MeusPedidos.png'
import CabecalhoUser from '../../../components/cabecalhouser'
import Rodape from '../../../components/Rodapé'

import Imagem01MenuNovidades from '../../../assets/image/imagem01-menuNovidades.png'
import Imagem02MenuNovidades from '../../../assets/image/imagem02-menuNovidades.png'
import LogoValorFiltro from '../../../assets/image/logo-valor-filtro.png'

import Carrossel from '../../../components/carrossel'
import ImagemNext from '../../../assets/image/icon-seta-carrossel-2.png'

import CardProdutos from '../../../components/cardProdutoUsuario'

import {useEffect, useState, useRef} from 'react'
import { filtroMarcaBalenciaga, filtroMarcaBurberry, filtroMarcaDolceGabanna, filtroMarcaGucci, filtroMarcaKenzo, filtroMarcaLouisVuitton, filtroMarcaModelle, filtroMarcaMorley, filtroMarcaPrada, filtroMarcaVersace, filtroMarcaZegna, filtroModeloBermuda, filtroModeloBlusa, filtroModeloCalca, filtroModeloCamisa, filtroModeloCasaco, filtroModeloMoletom, filtroModeloPolo, filtroModeloSueter, filtroTamanhoG, filtroTamanhoGG, filtroTamanhoM, filtroTamanhoP, filtroTamanhoPP } from '../../../api/filtroAPI';
import { listarTodos } from '../../../api/produtoAPI';

export default function Index(){
    const [produto, setProduto] = useState([]);

    const navigate = useNavigate();

    async function carregarProduto() {
        const resp = await listarTodos();
        setProduto(resp);
    }

    useEffect(() => {
        carregarProduto();
    }, [])

    async function filtroGucci() {
        const resp = await filtroMarcaGucci();
        setProduto(resp);
    }

    async function filtroBalenciaga() {
        const resp = await filtroMarcaBalenciaga();
        setProduto(resp);
    }

    async function filtroDolceGabanna() {
        const resp = await filtroMarcaDolceGabanna();
        setProduto(resp);
    }

    async function filtroBurberry() {
        const resp = await filtroMarcaBurberry();
        setProduto(resp);
    }

    async function filtroMorley() {
        const resp = await filtroMarcaMorley();
        setProduto(resp);
    }

    async function filtroKenzo() {
        const resp = await filtroMarcaKenzo();
        setProduto(resp);
    }

    async function filtroModelle() {
        const resp = await filtroMarcaModelle();
        setProduto(resp);
    }

    async function filtroZegna() {
        const resp = await filtroMarcaZegna();
        setProduto(resp);
    }

    async function filtroLouisVuitton() {
        const resp = await filtroMarcaLouisVuitton();
        setProduto(resp);
    }

    async function filtroVersace() {
        const resp = await filtroMarcaVersace();
        setProduto(resp);
    }

    async function filtroPrada() {
        const resp = await filtroMarcaPrada();
        setProduto(resp);
    }

    //FILTRO POR TAMANHO

    async function filtroPP() {
        const resp = await filtroTamanhoPP();
        setProduto(resp);
    }

    async function filtroP() {
        const resp = await filtroTamanhoP();
        setProduto(resp);
    }

    async function filtroM() {
        const resp = await filtroTamanhoM();
        setProduto(resp);
    }

    async function filtroG() {
        const resp = await filtroTamanhoG();
        setProduto(resp);
    }

    async function filtroGG() {
        const resp = await filtroTamanhoGG();
        setProduto(resp);
    }

    //FILTRAR POR MODELOS

    async function filtroCamisa() {
        const resp = await filtroModeloCamisa();
        setProduto(resp);
    }

    async function filtroCalca() {
        const resp = await filtroModeloCalca();
        setProduto(resp);
    }

    async function filtroMoletom() {
        const resp = await filtroModeloMoletom();
        setProduto(resp);
    }

    async function filtroCasaco() {
        const resp = await filtroModeloCasaco();
        setProduto(resp);
    }

    async function filtroBermuda() {
        const resp = await filtroModeloBermuda();
        setProduto(resp);
    }

    async function filtroPolo() {
        const resp = await filtroModeloPolo();
        setProduto(resp);
    }

    async function filtroSueter() {
        const resp = await filtroModeloSueter();
        setProduto(resp);
    }

    async function filtroBlusa() {
        const resp = await filtroModeloBlusa();
        setProduto(resp);
    }

    function navegarPedidos(){
        navigate('/user/seusPedidos')
    }
    return(
       <main className='main-menuUsuario'>
        <CabecalhoUser /> 
        <div className='section-filtro'>
                <div className='filtro-titulo'>
                    <h1>Filtrar por: </h1>
                </div>
                <div className='div-filtro-Roupas'>
                    <div className='filtro-marca'>
                        <div className='div-tituloMarcas'>
                            <h1>Marcas: </h1>
                        </div>

                        <div className='div-valoresMarcas'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroGucci} >Gucci</p>
                        </div>

                        <div className='div-valoresMarcas'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroBalenciaga} >Balenciaga</p>
                        </div>

                        <div className='div-valoresMarcas'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroDolceGabanna} >Dolce & Gabbana</p>
                        </div>

                        <div className='div-valoresMarcas'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroBurberry} >Burberry</p>
                        </div>

                        <div className='div-valoresMarcas'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroMorley} >Morley</p>
                        </div>

                        <div className='div-valoresMarcas'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroKenzo} >Kenzo</p>
                        </div>

                        <div className='div-valoresMarcas'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroModelle} >Modelle</p>
                        </div>

                        <div className='div-valoresMarcas'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroZegna} >Zegna</p>
                        </div>

                        <div className='div-valoresMarcas'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroLouisVuitton} >Louis Vuitton</p>
                        </div>

                        <div className='div-valoresMarcas'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroVersace} >Versace</p>
                        </div>

                        <div className='div-valoresMarcas'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroPrada} >Prada</p>
                        </div>
                    </div>

                    <div className='filtro-Tamanho'>
                        <div className='div-tituloTamanho'>
                            <h1>Tamanho: </h1>
                        </div>

                        <div className='div-valoresTamanho'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroPP} > XS / PP </p>
                        </div>

                        <div className='div-valoresTamanho'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroP} > S / P </p>
                        </div>

                        <div className='div-valoresTamanho'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroM} > M / M</p>
                        </div>
                        <div className='div-valoresTamanho'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroG} > L / G</p>
                        </div>

                        <div className='div-valoresTamanho'>
                            <img src={LogoValorFiltro} alt='logo-valores-filtro' />
                            <p onClick={filtroGG} > XL / GG</p>
                        </div>
                    </div>

                    <div className='filtro-roupas'>
                        <div className='div-tituloroupasDisponiveis' >
                            <h1>Roupas</h1>
                        </div>

                        <div className='div-roupasDisponiveis'>
                            <p onClick={filtroCamisa} >Camisa</p>
                        </div>
                        <div className='div-roupasDisponiveis'>
                            <p onClick={filtroCalca} >Calças</p>
                        </div>
                        <div className='div-roupasDisponiveis'>
                            <p onClick={filtroMoletom} >Moletons</p>
                        </div>
                        <div className='div-roupasDisponiveis'>
                            <p onClick={filtroCasaco} >Casacos / Jaquetas</p>
                        </div>
                        <div className='div-roupasDisponiveis'>
                            <p onClick={filtroBermuda} >Shorts e Bermudas</p>
                        </div>
                        <div className='div-roupasDisponiveis'>
                            <p onClick={filtroPolo} >Polos</p>
                        </div>
                        <div className='div-roupasDisponiveis'>
                            <p onClick={filtroSueter} >Suéters</p>
                        </div>
                        <div className='div-roupasDisponiveis'>
                            <p onClick={filtroBlusa}>Blusas</p>
                        </div>
                    </div>
                </div>
            </div>

           
        <div className='menuMasculino-div-MeusPedidos-Titulo'>
                    <div className='div-meusPedidos'>
                        <img src={ImagemMeusPedidos} alt='logo-meusPedidos' />
                        <p onClick={navegarPedidos} >Meus Pedidos</p>
                    </div>

                    <div className='MenuMasculino-div-titulo'>
                        <h1>Novidades</h1>
                        <hr className='hr-titulo-novidades' />
                    </div>
                </div>

                <section className='MenuMasculino-section'>
                    <div className='div-CardsProd'>
                    {produto.map(item =>
                        <CardProdutos item={item} />
                    )}
                    </div>

                    <div className='Menu-div-buttomVerMais'>
                        <button> Ver mais...</button>
                    </div>

                    <div className='div-cards-Destaque-MenuNovidades' >
                        <div className='div-cardEmDestaque-Img01-MenuNovidades' >
                            <img src={Imagem01MenuNovidades} alt='imagem-01-menuMasculino' />
                            <h3>ENCONTRE SUA MARCA FAVORITA COM DESCONTOS IMPERDÍVEIS, NA MODELLE.</h3>
                        </div>

                        <div className='div-cardEmDestaque-Img02-MenuNovidades'>
                            <img src={Imagem02MenuNovidades} alt='imagem-01-menuMasculino' />
                            <h3>JAQUETA DE MONOGRAMA EM REVESTIMENTO DE PEITO SIMPLES LVSE </h3>
                        </div>
                    </div>
                    <div className='div-hr-card-Destaque'>
                        <hr className='hr-card-Destaque'/>
                    </div>
                
                    <div className='div-carrossel'>
                        <Carrossel />
                    </div>
                   
            </section>

            <Rodape />
        </main> 
    );
}