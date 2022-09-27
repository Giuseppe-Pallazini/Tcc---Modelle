import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'
import CabeçalhoUser from '../../../components/cabecalhouser'

import './index.scss';
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main className='main-gerenciarProd' >
            <CabeçalhoUser />
        </main> 
    );
}