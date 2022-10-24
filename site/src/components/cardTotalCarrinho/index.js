import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import './index.scss';
import '../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

import LogoModelle from '../../assets/image/logo-modelle.png'
import LogoCaminhão from '../../assets/image/logo-caminhão.png'
import LogoCartão from '../../assets/image/logo-cartão.png'
import Storage from 'local-storage'

export default function Index({calcularTotal}){

    

    return(
       <main className='main-card-total-carrinho'>
        
        <section className='section-carrinho-principal'>
                    <div className='div-carrinho-titulo'>
                        <h1 className='carrinho-h1-titulo'> SEU CARRINHO </h1>
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
                                    <p className='carrinho-p-infoPagamento'>Cartão de credito, debito ou PIX</p>
                                </div>
                            </div>


                            <div className='div-carrinho-info-total'>
                                <p className='carrinho-p-total'> TOTAL</p>
                                <div className='div-carrinho-valor-total'>
                                    <p className='carrinho-p-textTotal-valor'>R$ </p>
                                    <p className='carrinhho-valor-total'> {calcularTotal()} </p>
                                </div>
                            </div>

                            <div className='div-carrinho-info-continuar'>
                                <button className='carrinho-botão-continuar'> Continuar </button>
                            </div>
                        </div>
                    </div>
                </section>

        </main> 
    );
}