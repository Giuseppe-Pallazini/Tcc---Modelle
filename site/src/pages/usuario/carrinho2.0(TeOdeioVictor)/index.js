import './index.scss';

import Cabecalho from '../../../components/cabecalhouser';
import ProdutoCarrinho2 from '../../../components/cardProdutoCarrinho2.0/index'
import Rodape from '../../../components/Rodapé'

import LogoModelle from '../../../assets/image/logo-modelle.png'
import LogoCaminhão from '../../../assets/image/logo-caminhão.png'
import LogoCartão from '../../../assets/image/logo-cartão.png'

import '../../../assets/common/index.scss'
import { useEffect, useState } from 'react';
import Storage from 'local-storage'
import { buscarProdutoPorId } from '../../../api/produtoAPI';

import { Link } from 'react-router-dom';
import { ListarTamanhoPorId } from '../../../api/tamanhoAPI';

//import { toast } from 'react-toastify';

export default function Index() {
    const [itens, setItens] = useState([]);

    function removerItem(id) {
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho', carrinho);
        carregarCarrinho();
    }

    function qtdItens() {
        return itens.length
    }


    async function carregarCarrinho() {
        let carrinho = Storage('carrinho')
        if (carrinho) {

            let temp = [];

            for (let produto of carrinho) {
                let p = await buscarProdutoPorId(produto.id);

                temp.push({
                    produto: p,
                    qtd: produto.qtd,
                })
            }
            setItens(temp)
        }

    }

    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.produto.info.preco * item.qtd;
        }
        return total.toFixed(2);
    }


    useEffect(() => {
        carregarCarrinho();
    }, [])

    return (

        <main className='main-carrinho'>
            <Cabecalho />

            <section className='carrinho-section1'>

                <div className='carrinho-section1-div1'>
                    <h1 className='carrinho-h1-1'> CARRINHO </h1>

                    {itens.map(item =>
                        <ProdutoCarrinho2 item={item} removerItem={removerItem} carregarCarrinho={carregarCarrinho} />
                        )}
                </div>

                <div className='carrinho-section1-div2'>
                    <div className='carrinho-section1-div2-divImg'>
                        <img className='carrinho-section1-div2-img1' src={LogoModelle} alt='Logo-Modelle' />
                    </div>

                    <div className='just-center'> 
                    <div className='carrinho-section1-div2-1'>
                        <div className='carrinho-section1-div2-1-caminhao'>
                            <img src={LogoCaminhão} alt='icon-caminhao' />
                        </div>

                        <div className='carrinho-section1-div2-1-1'>
                            <p className='carrinho-section1-div2-1-1-p1'> <b> Prazo de entrega </b> </p>
                            <p className='carrinho-section1-div2-1-1-p2'> Frete grátis em todo território nacional</p>
                        </div>

                    </div>
                    </div>

                    <div className='carrinho-section1-div2-1-divHr'>
                        <hr className='carrinho-section1-div2-1-hr' />
                    </div>

                <div className='just-center'> 
                    <div className='carrinho-section1-div2-2'>

                        <div>
                            <img src={LogoCartão} alt='Logo-Cartao' />
                        </div>

                        <div className='carrinho-section1-div2-2-1'>
                            <p className='carrinho-section1-div2-2-1-p1'> <b>  Formas de pagamento </b> </p>
                            <p className='carrinho-section1-div2-2-1-p2'> Cartão de crédito </p>
                        </div>

                    </div>
                </div>

                        <div className='carrinho-section1-div2-1-divHr'>
                            <hr className='carrinho-section1-div2-1-hr' />
                        </div>

                    <div className='just-center'> 
                        <div className='carrinho-section1-div2-3'>
                            <div className='carrinho-section1-div2-3-div1'> 
                                <p className='carrinho-section1-div2-3-p1'> <b> Total: </b> </p>
                                <p> ({qtdItens()} Itens)</p>
                            </div>
                        <p className='carrinho-section1-div2-3-p2'> R$ {calcularValorTotal()} </p>
                        </div>
                    </div>

                    <div className='carrinho-section1-div2-4'> 
                        <Link to='/user/pagamentoCartao' className='carrinho-section1-div2-4-Link' > Continuar </Link>
                    </div>

                </div>

            </section>

            <Rodape />
        </main>
    );
}