import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import './index.scss';
import '../../../assets/common/index.scss'
import Cabecalho from '../../../components/cabecalhouser'
import BoxSeusPedidos from '../../../components/boxSeusPedidos'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main className='main-VerSeusPedidos'>
            <Cabecalho />

            <div className='div-botaoVoltar'> 
                <button>Voltar</button>
            </div>
            <section className='section-SeusPedidos'>
                <div className='div-TituloSeusPedidos'>
                    <h1>Seus pedidos: </h1>
                </div>
                <div className='div-boxSeusPedidos'>
                    <BoxSeusPedidos />
                </div>

                <hr className='hr-divisorPed' />
                
                <div className='div-boxSeusPedidos'>
                    <BoxSeusPedidos />
                </div>
            </section>
        </main> 
    );
}