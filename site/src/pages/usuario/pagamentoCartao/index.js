import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'
import './index.scss';
import '../../../assets/common/index.scss'

import CabecalhoUser from '../../../components/cabecalhouser/index.js'
import RodapeUser from '../../../components/Rodapé/index.js'

import LogoLocalizacao from '../../../assets/image/imagem-localização.png'
import LogoCartao from '../../../assets/image/logo-cartão.png'
import LogoFinalizado from '../../../assets/image/logo-finalizado.png'
import LogoSeta from '../../../assets/image/set-tela-pagamentos.png'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main className='main-pagamentoPrincipal'>
            <CabecalhoUser />

                 <section className='section-pagamento-principal'>
                    <div className='div-pagamento-icons-situações'>
                        <img src={LogoLocalizacao} alt='logo-localização' className='icon-pagamento-localização' />
                        <img src={LogoSeta} alt='logo-seta'  className='icon-pagamento-seta' />
                        <img src={LogoCartao} alt='logo-cartão'  className='icon-pagamento-cartão'/>
                        <img src={LogoSeta} alt='logo-seta'  className='icon-pagamento-seta'/>
                        <img src={LogoFinalizado} alt='logo-confirmado'  className='icon-pagamento-confirmado'/>
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
                    </div>
                 </section>

            <RodapeUser />
        </main> 
    );
}