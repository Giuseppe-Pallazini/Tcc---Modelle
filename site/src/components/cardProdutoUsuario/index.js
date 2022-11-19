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
import { deletarFavorito, listaDeDesejo, listaDeDesejos, verificarProdutoFavoritado } from '../../api/desejoAPI'

import { API_URL } from '../../api/config.js';
import { useNavigate } from 'react-router-dom';
import LogoValorFiltro from '../../assets/image/logo-valor-filtro.png'
import { filtroMarcaBalenciaga, filtroMarcaBurberry, filtroMarcaDolceGabanna, filtroMarcaGucci, filtroMarcaKenzo, filtroMarcaLouisVuitton, filtroMarcaModelle, filtroMarcaMorley, filtroMarcaPrada, filtroMarcaVersace, filtroMarcaZegna, filtroModeloBermuda, filtroModeloBlusa, filtroModeloCalca, filtroModeloCamisa, filtroModeloCasaco, filtroModeloMoletom, filtroModeloPolo, filtroModeloSueter, filtroTamanhoG, filtroTamanhoGG, filtroTamanhoM, filtroTamanhoP, filtroTamanhoPP } from '../../api/filtroAPI';
import CoracaoIcon from '../../assets/image/Coracao-icon.svg'



export default function Index(props) {
    const [produto, setProduto] = useState([]);
    const [modelo, setModelo] = useState([]);
    const [filtro, setFiltro] = useState('');

    const usid = storage('usuario-logado');


    const [favorito, setFavorito] = useState();
    const [idUsuario, setIdUsuario] = useState()

    useEffect(() => {
        if(!usid){
            setIdUsuario(null)
        }
        else {
            setIdUsuario(usid.id);
        }

        verificarSeEstáVerificado(usid.id, props.item.produto);
    }, []);


    useEffect(() =>{
        let a = verificarSeEstáVerificado(usid.id, props.item.produto);
        console.log(a);
    }, [favorito]);

    const [fav1, setFav1] = useState();
    const [dele, setDel] = useState();


    async function favoritado(idUser, idProd) {
        const resp = '';
        if (favorito == Coracao2Icon) {
            const del = deletarFavorito(idUser, idProd)
            setDel(del);
            resp = setFavorito(CoracaoIcon)
        }
        else if (favorito == CoracaoIcon) {
            const fav1 = await listaDeDesejo(idUser, idProd);
            setFav1(fav1);
            resp = setFavorito(Coracao2Icon);
        }
        return resp;
    }


    
    async function verificarSeEstáVerificado(idUser, idProd){
        const resposta = await verificarProdutoFavoritado(idUser, idProd);

        if(resposta == undefined || resposta === null || !resposta || resposta == ''){
            setFavorito(CoracaoIcon);
        }
        else{
            setFavorito(Coracao2Icon);
        }
    }

    const navigate = useNavigate();

    async function carregarProduto() {
        const resp = await listarTodos();
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

            <div className='section-card'>

                    <div className='card-produto'>
                        <div className='icon-lista'>
                            <div>
                                <img onClick={() =>favoritado(idUsuario, props.item.produto)} src={favorito} alt='' className='icon-lista-desejo' />
                            </div>

                            <img onClick={() => abrirDetalhes(props.item.produto)} src={mostrarImagem(props.item.ds_imagem)} alt='imagem' className='gerenciarProd-imagem-card-1' />
                        </div>

                        <div className='card-info' >
                            <p className='card-info-nome' > {props.item.nome}</p>

                            <p className='card-info-complemento' >{props.item.complementoProduto}</p>

                            <p className='card-info-preco' >R$ {formatarPreco(props.item.preco * 1)}</p>
                        </div>
                    </div>
                
            </div>

        </main>
    )
}