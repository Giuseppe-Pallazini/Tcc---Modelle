//import { useNavigate} from 'react-router-dom'
//import storage from 'local-storage'
import CabecalhoAdm from '../../../components/cabecalhoadm'

import './index.scss'
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    const [resultado, setResultado] = useState(1)

    function contador() {
        let a = resultado + 1;
        if(resultado >= 10){
            return document.getElementById("botaomais").disabled = false;
        }

        return setResultado(a)
    }

    function contadorMenos() {
        let a = resultado - 1;
        if(resultado < 1){
            return document.getElementById("botaomenos").disabled = false;
        }
        return setResultado(a)
    }

    return(
       <main className='t'>
            <CabecalhoAdm />

            <h1> Oi </h1>
        <div className='a'> 
            <p id='botaomenos' onClick={contadorMenos}> - </p>

            {resultado}

             <p id='botaomais' onClick={contador}> + </p> 

             </div>
        </main> 
    );
}