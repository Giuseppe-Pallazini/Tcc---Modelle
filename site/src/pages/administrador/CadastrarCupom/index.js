import './index.scss'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import { IMaskInput } from 'react-imask'
import CabecalhoAdm from '../../../components/cabecalhoadm'
import desc from '../../../assets/image/descontto.svg'
import '../../../assets/common/index.scss'


import { useEffect, useState, useRef } from 'react'




export default function Index() {

    const navigate = useNavigate();

    return (
        <main className='main-cadastroCupom'>
            <CabecalhoAdm />
            <section className='section-cadastroCupom'>


                <div className='info-cup'>
                    <h1> Cadastrar cupom </h1>
                    <img className='image-desconto' src={desc}></img>
                </div>

                <hr className='linha' />

                <div className='inputs'>

                    <div className='cupom'>

                        <span> Código do cupom: </span>
                        <input type='text' />

                    </div>

                    <div className='quantidade'>

                        <span> Quantidade: </span>
                        <IMaskInput mask='00.00' type='number' />

                    </div>

                    <div className='desconto'>

                        <span> Desconto: </span>
                        <IMaskInput mask='00.00' type='number' />

                    </div>

                </div>


                <button className='bt-cadastro'> Cadastrar </button>



            </section>
        </main>
    );
}