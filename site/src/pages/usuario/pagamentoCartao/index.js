import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import CabecalhoUser from '../../../components/cabecalhouser'
import ProdutoCarrinho from '../../../components/cardProdutoCarrinho/index'
import RodapeUser from '../../../components/Rodapé'
import './index.scss';
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main>
        <h1> Oi </h1>
            <CabecalhoUser />

            <ProdutoCarrinho />
            
            <RodapeUser />
        </main> 
    );
}