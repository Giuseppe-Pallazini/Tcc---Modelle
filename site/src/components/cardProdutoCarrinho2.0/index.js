import './index.scss'
import '../../assets/common/index.scss';
import { buscarImagem, buscarProdutoPorIdUsuario, listarTodos } from '../../api/produtoAPI';
import IconeRemover from '../../assets/image/remover-svg.svg';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { API_URL } from '../../api/config';

import IconRemover from '../../assets/image/icon-remover-carrinho.svg'

import Storage from 'local-storage';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useParams } from 'react-router-dom';
import { ListarTamanhoPorId } from '../../api/tamanhoAPI';

export default function Index({ item: { produto: { info, imagens, tamanho }, qtd }, removerItem, carregarCarrinho }) {
    const [produto, setProduto] = useState({ info: {}, tamanho: [], imagens: [] });
    const [qtdProduto, setQtdProduto] = useState(qtd);
    const [imagemPrincipal, setImagemPrincipal] = useState(0);
    const [idTamanho, setIdTamanho] = useState();


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


    function exibirImagemPrincipal() {
        if (imagens.length > 0) {
            return API_URL + '/' + imagens[imagemPrincipal]
        }
    }


    async function carregarProduto() {
        const resp = await listarTodos();
        return resp;
    }

    async function carregarTamanhoId(id) {
        const r = await ListarTamanhoPorId(id);
        console.log(r)
        return r
    }

    // function buscarNomeTamanho(id) {
    //     const cat = tamanho.find(item => item.id == id);
    //     return cat.tamanho;
    // }

    function calcularSubTotal() {
        const subtotal = qtdProduto * info.preco;
        return subtotal.toFixed(2)
    }



    useEffect(() => {
        carregarPagina();
        carregarTamanhoId();
    }, [])

    return (
        <main className='main-carrinho'>

            <section className='carrinho-section1'>

                <div className='carrinho-section1-div-1'>
                    <div className='carrinho-div-imgProd'>
                        <img className='carrinho-div-imgProd-img' src={exibirImagemPrincipal()} alt='img-produto' />
                    </div>

                    <div className='carrinho-section1-div-1-1'>


                        <div className='carrinho-section1-div-1-2'>
                            <div className='carrinho-section1-div-1-2-divP'>
                                <p> <img src={IconRemover} /> Remover </p>
                            </div>
                            <p> ID: {info.id} </p>
                            <p className='cor'> {info.produto} </p>
                            <hr />
                        </div>


                        <div className='carrinho-section1-div-1-3'>
                            <div>
                                <p> Cor </p>
                                <p style={{ backgroundColor: info.cor }}></p>
                            </div>
                            <div>
                                <p> Tamanho: </p>

                                <select value={idTamanho}>
                                    <option selected disabled hidden>Selecione</option>
                                    {tamanho.map(item =>
                                        <option className='cadastro-section2-div3-select-option'> {item} </option>
                                    )}
                                </select>


                            </div>
                            <hr />
                        </div>


                        <div className='carrinho-section1-div-1-4'>
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
                                <p> Subtotal:  R$ <b> {calcularSubTotal()} </b> </p>                    
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </main>
    );
}