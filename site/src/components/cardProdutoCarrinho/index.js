import './index.scss';
import '../../assets/common/index.scss'
import { buscarImagem, listarTodos } from '../../api/produtoAPI'
import IconeRemover from '../../assets/image/remover-svg.svg'
import { useState } from 'react';
import {toast } from 'react-toastify'

import Storage, { remove } from 'local-storage'

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default function Index({ item: { produto: { info, imagens, tamanho }, qtd }, removerItem }) {
    const [qtdProduto, setQtdProduto] = useState(qtd);
    const [resultado, setResultado] = useState(1)

    function mostrarImagem(imagem) {
        return buscarImagem(imagem)
    }

    function calcularSubTotal() {
        const subtotal = qtdProduto * info.preco;
        return subtotal
    }

    function alterarQuantidade(novaQtd) {
        setQtdProduto(novaQtd)

        let carrinho = Storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == info.id);
        itemStorage.qtd = novaQtd;

        Storage('carrinho', carrinho);
    }

    function contador() {
        let a = resultado + 1;
        if(resultado >= info.disponivel){
            return document.getElementById("botaomais").disabled = false;
        }

        return setResultado(a), setQtdProduto(a)
    }

    function contadorMenos() {
        let a = resultado - 1;
        if(resultado <= 1){
            return document.getElementById("botaomenos").disabled = false;
        }
        return setResultado(a), setQtdProduto(a)
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
                        <img className='carrinho-div-imgProd-img' src={mostrarImagem(imagens)} alt='img-produto' />
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
                            <p className='carrinho-textCor'> {info.cor} </p>
                        </div>

                        <div className='div-carrinho-informações-tamanho'>
                            <p className='carrinho-textTamanho'>Tamanho </p>
                            <p className='carrinho-valorTamanho'> {tamanho} </p>
                        </div>

                        <div className='div-carrinho-valorProd'>
                            <p className='carrinho-textValor'> R$ </p>
                            <p className='carrinho-valorProd'> {info.preco} </p>
                        </div>

                        <div className='div-carrinho-informaões-qtdProd'>
                            <p> Quant. </p>
                            <div className='carrinho-div-input-qtd'>
                                <p className='carrinho-div-input-qtd-mais' onClick={contadorMenos}> - </p>
                                <p className='carrinho-div-input-qtd-resultado'> {resultado} </p>
                                <p className='carrinho-div-input-qtd-menos' onClick={contador} value={qtdProduto} onChange={e => alterarQuantidade(e.target.value)}> + </p>
                            </div>
                            <div className='div-carrinho-informacoes-subtotal'>
                                <p> Subtotal: R$ <b> {calcularSubTotal()} </b> </p>

                            </div>
                        </div>

                    </div>
                </div>
                <hr className='quebra-hr' />
            </div>
        </main>
    );
}