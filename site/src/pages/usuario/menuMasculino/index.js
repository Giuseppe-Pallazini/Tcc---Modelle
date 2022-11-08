import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import './index.scss';
import '../../../assets/common/index.scss'

import ImagemMeusPedidos from '../../../assets/image/logo-MeusPedidos.png'
import CabecalhoUser from '../../../components/cabecalhouser'
import Rodape from '../../../components/Rodapé'

import Imagem01MenuMasculino from '../../../assets/image/imagem01-menuMasculino.png'
import Imagem02MenuMasculino from '../../../assets/image/imagem02-menuMasculino.png'

import CardProdutosMenuMasculino from '../../../components/CardProdutosMenu'

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
                            <div className='div-CardsProd'>
                                <CardProdutosMenuMasculino />
                            </div>
                            <div className='div-CardsProd'>
                                <CardProdutosMenuMasculino />
                            </div>
                            <div className='div-CardsProd'>
                                <CardProdutosMenuMasculino />
                            </div>
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

                    <div className='Menu-div-buttomVerMais'>
                        <button> Ver mais...</button>
                    </div>

                    <div className='div-cardsEmDestaque'>
                        <div className='div-cardEmDestaque-Img01'>
                            <img src={Imagem01MenuMasculino} alt='imagem-01-menuMasculino' />
                            <h3>ENCONTRE SUA MARCA FAVORITA COM DESCONTOS IMPERDÍVEIS, NA MODELLE.</h3>
                        </div>

                        <div className='div-cardEmDestaque-Img02'>
                            <img src={Imagem02MenuMasculino} alt='imagem-01-menuMasculino' />
                            <h3>JAQUETA DE MONOGRAMA EM REVESTIMENTO DE PEITO SIMPLES LVSE </h3>
                        </div>
                    </div>
            </section>
            <Rodape />
        </main> 
    );
}