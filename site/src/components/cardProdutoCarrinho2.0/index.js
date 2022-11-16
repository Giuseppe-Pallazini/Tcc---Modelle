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
    const [tamProduto, setTamProduto] = useState(tamanho);


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

    async function remover() {
        confirmAlert({
            title: ' Remover Produto?',
            message: `Confirmar remoção do ${info.produto}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resposta = await removerItem(info.id)
                        await carregarProduto();
                        toast.dark(' ✔️ Produto removido com sucesso!')
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
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
                            <div className='carrinho-section1-div-1-2-1'>
                                <div className='carrinho-section1-div-1-2-divImg'>
                                    <div onClick={remover} className='carrinho-section1-div-1-2-divImg-1'>
                                        <img className='image' src={IconRemover} />
                                        <p className='carrinho-section1-div-1-2-divImg-1-p'> Remover </p>
                                    </div>
                                </div>
                            </div>
                            <div className='carrinho-section1-div-1-2-2'>
                                <p className='carrinho-section1-div-1-2-p1'> ID: {info.id} </p>
                                <p className='carrinho-section1-div-1-2-p2'> {info.produto} </p>
                            </div>
                            <hr />
                        </div>


                        <div className='carrinho-section1-div-1-3'>
                            <div className='carrinho-section1-div-1-3-div1'>
                                <p className='carrinho-section1-div-1-3-div1-p1'> <b> Cor </b> </p>
                                <p className='carrinho-section1-div-1-3-div1-p2' style={{ backgroundColor: info.cor }}></p>
                            </div>
                            <div className='carrinho-section1-div-1-3-div2'>
                                <p className='carrinho-section1-div-1-3-div2-p'> <b>  Tamanho: </b> </p>

                                <select className='carrinho-section1-div-1-3-div2-select' value={tamProduto} onChange={e => alterarTamanho(e.target.value)}>
                                    <option selected disabled hidden>Selecione</option>
                                    {tamanho.map(item =>
                                        <option className='cadastro-section2-div3-select-option'> {item} </option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <hr className='hr' />
                        <div className='carrinho-section1-div-1-4'>
                            <div className='carrinho-section1-div-1-4-div1'>
                                <p className='carrinho-section1-div-1-4-div1-p'> Qtd: </p>
                                <div className='carrinho-section1-div-1-4-div1-div2'>
                                    <select className='carrinho-section1-div-1-4-div1-div2-select' onChange={e => alterarQuantidade(e.target.value)} value={qtdProduto}>
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