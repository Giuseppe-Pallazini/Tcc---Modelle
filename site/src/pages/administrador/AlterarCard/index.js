import './index.scss'
import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'
import CabecalhoAdm from '../../../components/cabecalhoadm'

import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main className='main-cardEmDestaque'>
            <CabecalhoAdm />
            <section className='section-cardEmDestaque'>
                <div className='div-titulo-cardEmDestaque'>
                    <h1 className='titulo-cardEmDestaque'> Card em destaque </h1>
                </div>

                <div className='div-escolher-painelEditar'> </div>

            </section>

        </main> 
    );
}