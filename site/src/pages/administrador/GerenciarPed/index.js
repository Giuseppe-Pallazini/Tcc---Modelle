//import { useNavigate} from 'react-router-dom'
//import storage from 'local-storage'
import CabecalhoAdm from '../../../components/cabecalhoadm'

import './index.scss'
import LogoLupa from '../../../assets/image/logo-lupa.png'
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'
import { verPedidos } from '../../../api/produtoAPI'
import CardPedidos from '../../../components/cardPedidosAdmin'

export default function Index(){
    const [produto, setProduto] = useState([]);
    const [status, setStatus] = useState();

    async function listarPedidos(){
        let a = await verPedidos();
        setProduto(a);
    }

    useEffect(() =>{
        listarPedidos();
    })


    
    return(
        <main className='main-gerenciar'>
        <CabecalhoAdm />         

        <div className='div-filtro-buscarAdm'>
            <input placeholder='Buscar'/><img className='' src={LogoLupa} alt='logoLupa' /> 
        </div>

        <section className='section-tables'>
            <CardPedidos/>
        </section>
    </main> 
    );
}