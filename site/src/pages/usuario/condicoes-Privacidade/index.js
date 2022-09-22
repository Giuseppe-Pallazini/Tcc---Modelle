import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import Cabecalho from '../../../components/cabecalhouser/index.js'

import './index.scss';
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main>
            <Cabecalho/>
        </main> 
    );
}