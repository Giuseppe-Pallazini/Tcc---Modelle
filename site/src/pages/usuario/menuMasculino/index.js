import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import './index.scss';
import '../../../assets/common/index.scss'

import ImagemMeusPedidos from '../../../assets/image/logo-MeusPedidos.png'
import FiltroProdutos from '../../../components/filtroRoupas'
import CabecalhoUser from '../../../components/cabecalhouser'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main className='main-menuUsuario'>
        <CabecalhoUser /> 
            <section>
                <div className='div-meusPedidos'>
                    <img src={ImagemMeusPedidos} alt='logo-meusPedidos' />
                    <p>Meus Pedidos</p>
                </div>
                <div className='div-filtroRoupas' name='marca'>
                    <FiltroProdutos />
                </div>
                <div>

                </div>
            </section>
        </main> 
    );
}