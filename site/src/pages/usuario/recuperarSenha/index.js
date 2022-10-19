import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import Image1 from '../../../assets/image/049997300_1651416413-17399 1.png'
import Image2 from '../../../assets/image/logo-modelle.svg'
import Image3 from '../../../assets/image/voltar-recuperarConta.svg'

import './index.scss';
import '../../../assets/common/index.scss'
import { useEffect, useState, useRef } from 'react'

export default function Index() {
    return (
        <main className='rec-senha-tudo'>

            <section className='rec-senha-section1'>

                <img src={Image3} alt='' />
                <img src={Image2} alt='' />

                <p> Recuperar Conta</p>

                <input type='text' placeholder='Email original' />

                <button> Enviar Código</button>

                <p> All rights reserved © </p>

            </section>


            <section> <img src={Image1} alt='' /> </section>

        </main>
    );
}