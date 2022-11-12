import './index.scss';

import Cabecalho from '../../../components/cabecalhouser';
import ProdutoCarrinho from '../../../components/cardProdutoCarrinho/index'
import Rodape from '../../../components/Rodapé'

import LogoModelle from '../../../assets/image/logo-modelle.png'
import LogoCaminhão from '../../../assets/image/logo-caminhão.png'
import LogoCartão from '../../../assets/image/logo-cartão.png'

import '../../../assets/common/index.scss'
import { useEffect, useState } from 'react';
import Storage from 'local-storage'
import { buscarProdutoPorId } from '../../../api/produtoAPI';

import { Link } from 'react-router-dom';

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

            <section className='carrinho-section'>

                <section className='section-carrinho-principal'>
                    <div className='div-carrinho-titulo'>
                        <h1 className='carrinho-h1-titulo'> SEU CARRINHO  </h1>
                    </div>

                    <div className='div1-carrinho'>
                    <div className='div-carrinho-cards-produtos'>
                            {itens.map(item =>
                                <ProdutoCarrinho item={item} removerItem={removerItem} carregarCarrinho={carregarCarrinho} />
                            )}

                        </div>
                        <div className='div-carrinho-informações'>

                            <div className='div-carrinho-infoPag'>
        
                                <div className='div-carrinho-logoModelle' >
                                    <img className='carrinho-logo-modelle' src={LogoModelle} alt='logo-modelle' />
                                </div>

                                <div className='div-carrinho-info-Prazo' >
                                    <img className='carrinho-logo-frete' src={LogoCaminhão} alt='logo-caminhão' />
                                    <div>
                                        <p className='carrinho-p-prazo'> Prazo de entrega de 5 a 20 dias</p>
                                        <p className='carrinho-p-infoFrete'> Frete gratuito em todo o territorio nacional</p>
                                    </div>
                                </div>
                                <hr />

                                <div className='div-carrinho-info-formasPagamento' >
                                    <img className='carrinho-logo-pagamento' src={LogoCartão} alt='logo-cartão' />
                                    <div>
                                        <p className='carrinho-p-formas'> Formas de pagamento</p>
                                        <p className='carrinho-p-infoPagamento'>Cartão de credito, boleto ou PIX</p>
                                    </div>
                                </div>

                                <div className='div-carrinho-info-total'>
                                    <p className='carrinho-p-total'> Total: </p>
                                    <p className='carrinho-p-total-itens'> ({qtdItens()} Itens) </p>
                                    <div className='div-carrinho-valor-total'>
                                        <p className='carrinho-p-textTotal-valor'>R$ </p>
                                        <p className='carrinhho-valor-total'> {calcularValorTotal()} </p>
                                    </div>
                                </div>

                                <div className='div-carrinho-info-continuar'>
                                    <Link className='carrinho-botão-continuar' to="/user/pagamentoCartao"> Continuar </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </section>
            <Rodape />
        </main>
    );
}