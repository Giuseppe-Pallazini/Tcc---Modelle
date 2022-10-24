import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import './index.scss';
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'
import Cabecalho from '../../../components/cabecalhouser'
import Rodape from '../../../components/Rodapé'
import LogoPix from '../../../assets/image/icone-pix.png'
import LogoQrCode from '../../../assets/image/icone-qrCode.png'
import LogoCopiar from '../../../assets/image/logo-copiar.png'
export default function Index(){
    return(
       <main className='pagamentoQrCode-main'>
        <Cabecalho />
            <section className='pagamentoQrcode-section-principal'>
                <div className='pagamentoQrcode-div-titulo'>
                    <img src={LogoPix} alt='logo-pix' />
                </div>

                <div className='pagamentoQrcode-div-logoQr'>
                    <img src={LogoQrCode} alt='logo-qrCode' />
                </div>

                <div className='pagamentoQrcode-div-textArea'>
                    <textarea placeholder='' maxLength='750' readOnly='disabled' spellcheck='default'  /> <img src={LogoCopiar} alt='logo-copiarChave' />
                </div>
            </section>
        <Rodape />
        </main> 
    );
}