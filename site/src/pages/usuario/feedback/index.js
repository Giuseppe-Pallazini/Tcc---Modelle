import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import './index.scss';
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

import Cabecalho from '../../../components/cabecalhouser'
import Rodape from '../../../components/Rodapé'

export default function Index(){
    return(
       <main className='feedback-main'>
        <Cabecalho />
            <section className='feedback-section-principal'>
                <div className='feedback-div-titulo'>
                    <h1>FeedBack </h1>
                </div>

                <div className='feedback-div-textFeedback'>
                    Mensagem <textarea placeholder='Ex: Atendimento otimo, frete seguro e rapido!!' maxLength='750' readOnly='disabled' spellcheck='default' />
                </div>

                <div className='feedback-div-button'>
                    <button>Enviar FeedBack</button>
                </div>
            </section>
            <Rodape />
        </main> 
    );
}