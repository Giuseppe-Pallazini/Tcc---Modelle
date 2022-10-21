import storage from 'local-storage'
import './index.scss';
import '../../../assets/common/index.scss'
import { useNavigate } from 'react-router-dom';

import CabecalhoUser from '../../../components/cabecalhouser/index.js'
import RodapeUser from '../../../components/Rodapé/index.js'

import LogoLocalizacao from '../../../assets/image/imagem-localização.png'
import LogoCartao from '../../../assets/image/logo-cartão.png'
import LogoFinalizado from '../../../assets/image/logo-finalizado.png'
import ImagemProd from '../../../assets/image/camiseta-preta-versace.png'
import LogoSeta from '../../../assets/image/set-tela-pagamentos.png'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    const navigate = useNavigate();
    function abrirDetalhes(id){
        navigate(`/user/destalheProduto/${id}`)
    }


    return(
       <main className='main-pagamentoPrincipal'>
            <CabecalhoUser />

                 <section className='section-pagamento-principal'>

                    <div className='pagamento-icones-situacoes'>
                        <div className='div-pagamento-icons-situações'>
                            <img src={LogoLocalizacao} alt='logo-localização' className='icon-pagamento-localização' />
                            <img src={LogoSeta} alt='logo-seta'  className='icon-pagamento-seta' />
                            <img src={LogoCartao} alt='logo-cartão'  className='icon-pagamento-cartão'/>
                            <img src={LogoSeta} alt='logo-seta'  className='icon-pagamento-seta'/>
                            <img src={LogoFinalizado} alt='logo-confirmado'  className='icon-pagamento-confirmado'/>
                        </div>
                    </div>
                        
                    
                    <div className='div-pagamento-endereço-infosped'>
                        <div className='div-pagamento-preenchEnd'>
                            <h1 className='pagamento-titulo-endereço'> Endereço </h1>

                            <div className='pagamento-PreenchEnd-l1'>
                                <div>
                                    <p className='pagamento-Preench-rua-p'>Rua:</p>
                                    <input type='text' placeholder='Ex: Avenida Paulista' className='pagamento-Preench-rua-input' />
                                </div>

                                <div className='pagamento-Preench-numero'>
                                    <p className='pagamento-Preench-numero-p'>N°</p>
                                    <input type='text' placeholder='Ex: 124' className='pagamento-Preench-numero-input' />
                                </div>
                            </div>  
                            <div className='pagamento-PreenchEnd-l2'>
                                <div className='pagamento-div-cidade'>
                                    <p className='pagamento-Preench-cidade-p'>Cidade:</p>
                                    <input type='text' placeholder='Ex: São Paulo' className='pagamento-Preench-cidade-input' />
                                </div>
                                <div>
                                    <p className='pagamento-Preench-bairro-p'>Bairro:</p>
                                    <input type='text' placeholder='Ex: Veleiros' className='pagamento-Preench-bairro-input' />
                                </div>
                                <div className='pagamento-div-cep'>
                                    <p className='pagamento-Preench-cep-p'>CEP:</p>
                                    <input type='text' placeholder='Ex: 04545-213' className='pagamento-Preench-cep-input' />
                                </div>
                            </div>

                            <div className='pagamento-PreenchEnd-l3'>
                                <div>
                                <p className='pagamento-Preench-complem-p'>Complemento:</p>
                                    <input type='text' placeholder='Ex: Casa' className='pagamento-Preench-comple-input' />
                                </div>
                            </div>
                        </div>


                        <div className='div-pagamento-InfosPed'> 
                              <div className='pagamento-div-imgProd'>
                                    <img src={ImagemProd} alt='imgProd-pagamento' />
                              </div>
                              <a onClick={abrirDetalhes} className='pagamento-infosPed-tituloProd'> Camiseta versace </a>

                              <div className='pagamento-div-qtdUnid'>
                                    Unidades: <p className='pagamento-p-qtdUnid-prod'> 01</p>
                              </div>

                              <div className='pagamento-div-datePed'>
                                    Data: <p className='pagamento-p-DtPed'> 12 / 10 / 2006</p>
                              </div>


                              <div className='pagamento-div-SubtotalPed'>
                                        Subtotal: <p className='pagamento-p-SubtotalPed'>R$ <span>1.345,99</span></p>
                              </div>

                              <div className='pagamento-div-EntregaPed'>
                                    Entrega: <p className='pagamento-p-EntregaPed'>R$ <span>0,00</span> </p>
                              </div>
                              <p className='pagamento-p-InfoEntr'>  Entrega em até 7 dias uteis  </p>



                              <div className='pagamento-div-CupomPed'>
                                    Cupom: <p className='pagamento-p-cupom'> CHAMB162</p>
                              </div>
                            
                              <div className='pagamento-div-TotalPed'>
                                    Total: <p className='pagamento-p-EntregaPed'>R$ <span>340,00</span> </p>
                              </div>
                            
                            <div className='pagamento-div-button'>
                                <button className='pagamento-button-finalizarPed'>Finalizar Compra</button>
                            </div>
                        </div>
                    </div>

                    <div className='pagamento-div-botao-proximo'> 
                        <button className='pagamento-botao-proximo'> Proximo </button>
                    </div>

                 </section>

            <RodapeUser />
        </main> 
    );
}