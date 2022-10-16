import './index.scss';
import Cabecalho from '../../../components/cabecalhouser';
import Camiseta from '../../../assets/image/camiseta-preta-versace.png';

import '../../../assets/common/index.scss'

export default function Index(){
    return(
       <main className='main-carrinho'>
            <Cabecalho />

            <section className='section-carrinho-principal'>
                <div className='div-carrinho-titulo'> 
                    <h1 className='carrinho-h1-titulo'> SEU CARRINHO </h1>
                </div>
                <div className='div-carrinho-informações'>
                    <div className='div-carrinho-cards-produtos'>
                    <div className='div-carrinho-infoProd'>
                        <div className='carrinho-div-imgProd'>
                            <img src={Camiseta} alt='img-produto' />
                        </div>
                        <div className='carrinho-div-informações-prod'>
                            <div className='div-carrinho-infromações-id'>
                                <div className='carrinho-p-ID'>ID:</div> 
                                <p className='carrinho-p-info-id'>01</p>
                            </div>

                            <div className='div-carrinho-informações-tituloProd'>
                                <h1 className='carrinho-nomeProd'> Camiseta Versace</h1>
                            </div>

                            <div className='div-carrinho-informações-corProd'>
                                <p className='carrinho-textCor'> Cor: </p>
                                <input className='carrinho-valorCor' type='color' />
                            </div>

                            <div className='div-carrinho-informações-tamanho'> 
                                <p className='carrinho-textTamanho'>Tamanho: </p>
                                <p className='carrinho-valorTamanho'>M</p>
                            </div>

                            <div className='div-carrinho-informaões-qtdProd'>
                                <div className='carrinho-div-input-qtd'>
                                    <p className='carrinho-diminuir-qtd'>-</p>
                                    <input className='carrinho-input-qtd' type='text' placeholder='1' />
                                    <p className='carrinho-almentar-qtd'>+</p>
                                </div>
                                <div className='div-carrinho-valorProd'>
                                    <p className='carrinho-textValor'>R$ </p>
                                    <p className='carrinho-valorProd'> 1.345,00 </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    

                    </div>

                    <div classname='div-carrinho-infoPag'>

                        <div className='div-carrinho-logoModelle' >
                            <img className='carrinho-logo-modelle' src='' alt='logo-modelle' />
                        </div>

                        <div className='div-carrinho-info-Prazo' >
                            <img className='carrinho-logo-frete' />
                            <div>
                                <p className='carrinho-p-prazo'> Prazo de entrega de 5 a 20 dias</p>
                                <p className='carrinho-p-infoFrete'> Frete gratuito em todo o territorio nacional</p>
                            </div>
                        </div>

                        <div className='div-carrinho-info-formasPagamento' >
                            <img className='carrinho-logo-pagamento' />
                            <div>
                                <p className='carrinho-p-formas'> Formas de pagamento</p>
                                <p className='carrinho-p-infoPagamento'>Cartão de credito, debito ou PIX</p>
                            </div>
                        </div>

                        <div className='div-carrinho-info-subtotal'>
                            <p className='carrinho-p-subtotal'> Subtotal</p>
                            <div className='div-carrinho-valor-subtotal'>
                                <p className='carrinho-p-textSubtotal-valor'>R$ </p>
                                <p className='carrinhho-valor-subtotal'>1.345,00</p>
                            </div>
                        </div>


                        <div className='div-carrinho-info-total'>
                            <p className='carrinho-p-total'> Subtotal</p>
                            <div className='div-carrinho-valor-total'>
                                <p className='carrinho-p-textTotal-valor'>R$ </p>
                                <p className='carrinhho-valor-total'>1.345,00</p>
                            </div>
                        </div>

                        <div className='div-carrinho-info-continuar'>
                            <button className='carrinho-botão-continuar'>Continuar</button>
                        </div>
                    </div>
                </div>
            </section>
        </main> 
    );
}