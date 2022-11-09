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
                    Código do cupom:?<input type='text'/>
                </div>
                

                <div className='cadastroCupom-descontoCupom'>   
                    Desconto:   

                </div>

                <div>
                    <input type='range' id='vol' name='vol' value='50' min='0' max='100'
                        oninput='display.value=value' onchange='display.value=value' />
                    <input type='text' id='display' value='50'
                        oninput='vol.value=value' onchange='vol.value=value' />
                </div>
           </section>
        </main> 
    );
}