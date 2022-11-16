import './index.scss';
import '../../assets/common/index.scss';
import { buscarImagem, listarTodos } from '../../api/produtoAPI';
import IconeRemover from '../../assets/image/remover-svg.svg';
import { useEffect, useState } from 'react';
import {toast } from 'react-toastify';
import { API_URL } from '../../api/config';

import Storage from 'local-storage';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Index({ item: { produto: { info, imagens, tamanho }, qtd }, removerItem, carregarCarrinho}) {
    const [qtdProduto, setQtdProduto] = useState(qtd);
    const [tamProduto, setTamProduto] = useState(tamanho);
    const [imagemPrincipal, setImagemPrincipal] = useState(0);

    function mostrarImagem(imagem) {
        return buscarImagem(imagem)
    }

    function exibirImagemPrincipal() {
        if (imagens.length > 0) {
            return API_URL + '/' + imagens[imagemPrincipal]
        }
    }

    function calcularSubTotal() {
        const subtotal = qtdProduto * info.preco;
        return subtotal.toFixed(2)
    }

    function alterarQuantidade(novaQtd) {
        setQtdProduto(novaQtd)

        let carrinho = Storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == info.id);
        itemStorage.qtd = novaQtd;
        Storage('carrinho', carrinho);
        carregarCarrinho();
    }

    async function carregarProduto(){
        const resp = await listarTodos();
        return resp; 
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


    return (
        <main className="main-carrinho-produtos">
            <div className='div-carrinho-cards-produtos'>
                <div className='div-carrinho-infoProd'>
                    <div className='carrinho-div-imgProd'>
                        <img className='carrinho-div-imgProd-img' src={exibirImagemPrincipal(imagens)} alt='img-produto' />

                    </div>
                    <div className='carrinho-div-informações-prod'>
                        <div className='div-carrinho-infromações-id'>
                            <div className='carrinho-p-ID'>ID: {info.id}</div>

                            <img className='carrinho-img-remover' src={IconeRemover} alt='' onClick={remover}/>
                        </div>

                        <div className='div-carrinho-informações-tituloProd'>
                            <h1 className='carrinho-nomeProd'> <b> {info.produto} </b> </h1>
                        </div>

                        <div className='div-carrinho-informacoes-complemento'> {info.complemento} </div>

                        <div className='div-carrinho-informações-corProd'>
                            <p className='div-carrinho-informações-corProd-p'> Cor: </p>
                            <p className='carrinho-textCor' style={{backgroundColor: info.cor}}></p>
                        </div>

                        <div className='div-carrinho-informações-tamanho'>
                            <p className='carrinho-textTamanho'>Tamanho </p>
                            <p className='carrinho-valorTamanho'> {tamanho} </p>
                            <div className='tam-conteiner'>
                            </div>
                            
                        </div>

                        <div className='div-carrinho-valorProd'>
                            <p className='carrinho-textValor'> R$ </p>
                            <p className='carrinho-valorProd'> {info.preco} </p>
                        </div>

                        <div className='div-carrinho-informaões-qtdProd'>
                            <p> Quant. </p>
                            <div className='carrinho-div-input-qtd'>
                                <select onChange={e => alterarQuantidade(e.target.value)} value={qtdProduto}>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                </select>
                            </div>
                            <div className='div-carrinho-informacoes-subtotal'>
                                <p> Subtotal: <b> R$ {calcularSubTotal()} </b> </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    );
}