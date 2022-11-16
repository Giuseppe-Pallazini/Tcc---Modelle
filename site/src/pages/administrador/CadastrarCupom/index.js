import './index.scss'
import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'
import CabecalhoAdm from '../../../components/cabecalhoadm'

import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'


export default function Index(){
    
    return(
       <main className='main-cadastroCupom'>
           <CabecalhoAdm /> 
           <section className='section-cadastroCupom'>
                <div className='cadastroCupom-divCodigo'>
                    <span>Código do cupom: </span>
                    <input type='text'/>
                </div>
                

                <div className='cadastroCupom-descontoCupom'>   
                    
                    <span>Desconto: </span>
                    <input type='text'/>  

                </div>
           </section>
        </main> 
    );
}