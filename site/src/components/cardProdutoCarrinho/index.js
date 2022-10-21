import './index.scss';
import '../../assets/common/index.scss'
import { buscarImagem } from '../../api/produtoAPI'
import IconeRemover from '../../assets/image/remover-svg.svg'
import { useState } from 'react';

import Storage, { remove } from 'local-storage'

export default function Index({ item: { produto: { info, imagens, tamanho }, qtd }, removerItem }) {
    const [qtdProduto, setQtdProduto] = useState(qtd);

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

    function remover() {
        removerItem(info.id);
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
                                <p> Subtotal: <b> {calcularSubTotal()} </b> </p>

                            </div>
                        </div>

                    </div>
                </div>
                <hr className='quebra-hr' />
            </div>
        </main>
    );
}