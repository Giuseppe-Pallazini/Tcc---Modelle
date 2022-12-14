import './index.scss'
import '../../assets/common/index.scss'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/config.js';

import { buscarImagem, listarProdutosFemininos } from '../../api/produtoAPI'
import { filtroMarcaBalenciaga, filtroMarcaBurberry, filtroMarcaDolceGabanna, filtroMarcaGucci, filtroMarcaLouisVuitton, filtroMarcaPrada, filtroMarcaVersace, filtroModeloBermuda, filtroModeloBlusa, filtroModeloCalca, filtroModeloCamisa, filtroModeloCasaco, filtroModeloMoletom, filtroModeloPolo, filtroModeloSueter, filtroTamanhoG, filtroTamanhoGG, filtroTamanhoM, filtroTamanhoP, filtroTamanhoPP } from '../../api/filtroAPI';





export default function Index() {
    const [produto, setProduto] = useState([]);

    const navigate = useNavigate();

    async function carregarProduto() {
        const resp = await listarProdutosFemininos();
        setProduto(resp);
    }
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

    useEffect(() => {
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

    function formatarPreco(preco) {
        return preco.toFixed(2);
    }

    function abrirDetalhes(id) {
        navigate(`/user/detalhesProduto/${id}`)
    }


    return (
        <main className='main-menu-produtos'>

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

                            <p onClick={filtroGucci} >Gucci</p>
                        </div>

                        <div className='div-valoresMarcas'>

                            <p onClick={filtroBalenciaga} >Balenciaga</p>
                        </div>

                        <div className='div-valoresMarcas'>

                            <p onClick={filtroDolceGabanna} >Dolce & Gabbana</p>
                        </div>

                        <div className='div-valoresMarcas'>

                            <p onClick={filtroBurberry} >Burberry</p>
                        </div>

                        <div className='div-valoresMarcas'>

                            <p onClick={filtroLouisVuitton} >Louis Vuitton</p>
                        </div>

                        <div className='div-valoresMarcas'>

                            <p onClick={filtroVersace} >Versace</p>
                        </div>

                        <div className='div-valoresMarcas'>

                            <p onClick={filtroPrada} >Prada</p>
                        </div>
                    </div>

                    <div className='filtro-Tamanho'>
                        <div className='div-tituloTamanho'>
                            <h1>Tamanho: </h1>
                        </div>

                        <div className='div-valoresTamanho'>

                            <p onClick={filtroPP} > XS / PP </p>
                        </div>

                        <div className='div-valoresTamanho'>

                            <p onClick={filtroP} > S / P </p>
                        </div>

                        <div className='div-valoresTamanho'>

                            <p onClick={filtroM} > M / M</p>
                        </div>
                        <div className='div-valoresTamanho'>

                            <p onClick={filtroG} > L / G</p>
                        </div>

                        <div className='div-valoresTamanho'>

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
                            <p onClick={filtroCalca} >Cal??as</p>
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
                            <p onClick={filtroSueter} >Su??ters</p>
                        </div>
                        <div className='div-roupasDisponiveis'>
                            <p onClick={filtroBlusa}>Blusas</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='section-card'>

                {produto.map(item =>
                    <div className='card-produto' onClick={() => abrirDetalhes(item.produto)}>
                        <div className='icon-lista'>
                            <img src={mostrarImagem(item.ds_imagem)} alt='imagem' className='gerenciarProd-imagem-card-1' />
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