import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import './index.scss';
import '../../../assets/common/index.scss'

import Cabecalho from '../../../components/cabecalhouser/index.js'
import Rodape from '../../../components/Rodapé/index.js'

import CardProd from '../../../components/cardProdutoListaDeDesejos/index.js'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main className='main-listaDeDesejos'>
            <Cabecalho />   
            <section className='listaDeDesejos-section-principal'>
                <div className='Div-listaDeDesejos-titulo' >
                    <h1> LISTA DE DESEJOS </h1>
                </div>
                <div className='Div-listaDeDesejos-card'>
                    <CardProd />
                </div>
            </section>

            <Rodape />
        </main> 
    );
}