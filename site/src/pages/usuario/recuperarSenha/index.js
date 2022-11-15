import { Link, useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import Image1 from '../../../assets/image/049997300_1651416413-17399 1.png'
import Image2 from '../../../assets/image/logo-modelle.svg'
import Image3 from '../../../assets/image/voltar-recuperarConta.svg'

import './index.scss';
import '../../../assets/common/index.scss'
import { useEffect, useState, useRef } from 'react'
import { toast } from 'react-toastify';

import validator from 'validator'
import LoadingBar from 'react-top-loading-bar'



export default function Index() {
    const [email, setEmail] = useState('')
    const [carregando, setCarregando] = useState(false)

    const ref = useRef();
    const navigate = useNavigate()

    function validateEmail() {

        if (validator.isEmail(email)) {
            ref.current.continuousStart();
            setTimeout(() => {
                navigate('/user/enviarCodigo')
            }, 2000)
            setCarregando(false)

        } else {
            toast.warn('Email Inválido')
        }
    }



    return (
        <main className='rec-senha-tudo'>
            <LoadingBar color='#99889C' ref={ref} />

            <section className='rec-senha-section1'>

                <Link to='/login' className='rec-senha-section1-link'>
                    <img src={Image3} alt='' />
                </Link>

                <div className='rec-senha-section1-div1'>
                    <div className='rec-senha-section1-div1-1'>
                        <img className='rec-senha-section1-div1-1-img' src={Image2} alt='' />

                        <p> Recuperar Conta</p>
                    </div>
                    <div className='rec-senha-section1-div1-2'>
                        <div>
                            <input className='rec-senha-section1-div1-2-input' id='btFechar' type='text' placeholder='Email original' value={email} onChange={e => setEmail(e.target.value)} />

                            <p className='rec-senha-section1-div1-2-p' onClick={validateEmail}> Enviar Código </p>
                        </div>
                    </div>
                </div>

                <p> All rights reserved © </p>

            </section>


            <section> <img src={Image1} alt='' /> </section>

        </main>
    );
}