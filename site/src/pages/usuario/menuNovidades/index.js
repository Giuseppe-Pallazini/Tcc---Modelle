import storage from 'local-storage'
import CardUsuario from '../../../components/cardProdutoUsuario'
import Cabecalho from '../../../components/cabecalhouser'


import './index.scss';
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){




    return(
       <main>
            <Cabecalho/>
            <CardUsuario />

        </main> 
    );
}