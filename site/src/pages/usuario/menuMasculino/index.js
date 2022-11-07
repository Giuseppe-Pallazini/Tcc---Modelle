import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import './index.scss';
import '../../../assets/common/index.scss'

import ImagemMeusPedidos from '../../../assets/image/logo-MeusPedidos.png'
import CabecalhoUser from '../../../components/cabecalhouser'

import CardProdutosMenuMasculino from '../../../components/CardProdutosMenuMasculino'

import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main className='main-menuUsuario'>
        <CabecalhoUser /> 

           
                <div className='MenuMasculino-div-MeusPedidos-Titulo'>
                    <div className='div-meusPedidos'>
                        <img src={ImagemMeusPedidos} alt='logo-meusPedidos' />
                        <p>Meus Pedidos</p>
                    </div>

                    <div className='MenuMasculino-div-titulo'>
                        <h1>Masculino</h1>
                        <hr />
                    </div>
                </div>

                <section className='MenuMasculino-section'>
                    <div className='MenuMasculino-div-filtroEcards'>
                        <div className='div-filtroRoupas'>
                            <div className='filtro-titulo'>
                                <h1>Filtrar por: </h1>
                            </div>

                            <div className='filtro-marca'>
                                <select>
                                    <option>
                                        marca
                                    </option>
                                    <option>
                                        <p>Marca</p>
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className='div-cards-Roupas'>
                            <div className='div-CardsProd'>
                                <CardProdutosMenuMasculino />
                            </div>

                            <div className='div-CardsProd'>
                                <CardProdutosMenuMasculino />
                            </div>
                            <div className='div-CardsProd'>
                                <CardProdutosMenuMasculino />
                            </div>
                            
                        </div>

                    </div>
            </section>
        </main> 
    );
}