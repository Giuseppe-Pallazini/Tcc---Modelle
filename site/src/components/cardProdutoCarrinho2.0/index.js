import './index.scss'
import '../../assets/common/index.scss';
import { buscarImagem, buscarProdutoPorIdUsuario, listarTodos } from '../../api/produtoAPI';
import IconeRemover from '../../assets/image/remover-svg.svg';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { API_URL } from '../../api/config';

import Storage from 'local-storage';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useParams } from 'react-router-dom';

export default function Index({ item: { produto: { info, imagens, tamanho }, qtd }, removerItem, carregarCarrinho }) {
    const [produto, setProduto] = useState({ info: {}, tamanho: [], imagens: [] });
    const [qtdProduto, setQtdProduto] = useState(qtd);
    const [tamProduto, setTamProduto] = useState(tamanho);
    const [imagemPrincipal, setImagemPrincipal] = useState(0);

    const { id } = useParams();
    
    async function carregarPagina() {
        const r = await buscarProdutoPorIdUsuario(id);
        setProduto(r)
    }


    function alterarQuantidade(novaQtd) {
        setQtdProduto(novaQtd)

        let carrinho = Storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == info.id);
        itemStorage.qtd = novaQtd;
        Storage('carrinho', carrinho);
        carregarCarrinho();
    }

    function alterarTamanho(novoTam) {
        setTamProduto(novoTam)

        let carrinho = Storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == info.id);
        itemStorage.tam = novoTam;
        Storage('carrinho', carrinho);
        carregarCarrinho();
    }

    function exibirImagemPrincipal() {
        if (imagens.length > 0) {
            return API_URL + '/' + imagens[imagemPrincipal]
        }
    }


    async function carregarProduto() {
        const resp = await listarTodos();
        return resp;
    }

    useEffect(() => {
        carregarPagina();
    }, [])

    return (
        <main className='main-carrinho'>

            <section className='carrinho-section1'>

                <div>
                    <img className='carrinho-div-imgProd-img' //src={exibirImagemPrincipal()} alt='img-produto'
                    />
                </div>

                <div>
                    <p> ID: {info.id} </p>
                    <p> {info.produto} </p>
                    <hr />
                    <div>
                        <p> Cor </p>
                        <p style={{ backgroundColor: info.cor }}></p>
                    </div>
                    <div>
                        <p> Tamanho: </p>

                        <select value={tamProduto}>
                            <option>
                                {produto.tamanho.map(item =>
                                    <div className='detalhes-info-tamanhos-icon'>
                                        <p className='detalhes-info-tamanhos-txt' > {item} </p>
                                    </div>
                                )}
                            </option>

                        </select>


                    </div>
                    <hr />
                    <div>
                        <p> Qtd: </p>
                        <div className='carrinho-div-input-qtd'>
                            <select onChange={e => alterarQuantidade(e.target.value)} value={qtdProduto}>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                                <option> 4 </option>
                                <option> 5 </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <p> Subtotal: { } </p>
                    </div>
                </div>

            </section>

        </main>
    );
}