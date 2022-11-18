import './index.scss'
import '../../assets/common/index.scss'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import IconListaDesejo from '../../assets/image/lista-desejo.png'
import IconLupa from '../../assets/image/logo-lupa.png'
import IconCoracao from '../../assets/image/Coracao-icon.svg'
import Coracao2Icon from '../../assets/image/Coracao-icon02.svg'
import storage from 'local-storage'

import { buscarPorNome, listarTodos, removerProduto, buscarImagem, listarProdutosMasculino, listarProdutosFemininos } from '../../api/produtoAPI'

import { API_URL } from '../../api/config.js';
import { useNavigate } from 'react-router-dom';
import LogoValorFiltro from '../../assets/image/logo-valor-filtro.png'
import { filtroMarcaBalenciaga, filtroMarcaBurberry, filtroMarcaDolceGabanna, filtroMarcaGucci, filtroMarcaKenzo, filtroMarcaLouisVuitton, filtroMarcaModelle, filtroMarcaMorley, filtroMarcaPrada, filtroMarcaVersace, filtroMarcaZegna, filtroModeloBermuda, filtroModeloBlusa, filtroModeloCalca, filtroModeloCamisa, filtroModeloCasaco, filtroModeloMoletom, filtroModeloPolo, filtroModeloSueter, filtroTamanhoG, filtroTamanhoGG, filtroTamanhoM, filtroTamanhoP, filtroTamanhoPP } from '../../api/filtroAPI';





export default function Index() {
    const [produto, setProduto] = useState([]);
    const [modelo, setModelo] = useState([]);
    const [filtro, setFiltro] = useState('');

    const navigate = useNavigate();

    async function carregarProduto() {
        const resp = await listarTodos();
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

    const [favorito, setFavorito] = useState(IconCoracao);

    function favoritado() {
        const resp = "";
        if (favorito == Coracao2Icon) {
            resp = setFavorito(IconCoracao)
        }
        else if (favorito == IconCoracao) {
            resp = setFavorito(Coracao2Icon);
        }
        return resp;
    }

    function adicionarLista(id) {
        let listaDesejos = [];
        if (storage('lista-desejo')) {
            listaDesejos = storage('lista-desejo')
        }

        if (!listaDesejos.find(item => item.id === id)) {
            listaDesejos.push({
                id: id
            })
            storage('lista-desejo', listaDesejos)
            toast.dark("🛒 Item Adicionado a Lista de Desejo");
        }
    }
    console.log(adicionarLista);
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

            <div className='section-card'>

                {produto.map(item =>
                    <div className='card-produto'>
                        <div className='icon-lista'>
                            <div onClick={adicionarLista(item.id)} >
                                <img onClick={favoritado} src={favorito} alt='' className='icon-lista-desejo' />
                            </div>


                            <img onClick={() => abrirDetalhes(item.produto)} src={mostrarImagem(item.ds_imagem)} alt='imagem' className='gerenciarProd-imagem-card-1' />
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