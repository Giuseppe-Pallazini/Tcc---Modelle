import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import './index.scss';
import '../../../assets/common/index.scss'

import ImagemMeusPedidos from '../../../assets/image/logo-MeusPedidos.png'
import CabecalhoUser from '../../../components/cabecalhouser'
import Rodape from '../../../components/Rodapé'

import Imagem01MenuNovidades from '../../../assets/image/imagem01-menuNovidades.png'
import Imagem02MenuNovidades from '../../../assets/image/imagem02-menuNovidades.png'
import LogoValorFiltro from '../../../assets/image/logo-valor-filtro.png'

import Carrossel from '../../../components/carrossel'
import ImagemNext from '../../../assets/image/icon-seta-carrossel-2.png'

import CardProdutos from '../../../components/cardProdutoUsuario'

import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main className='main-menuUsuario'>
        <CabecalhoUser /> 

           
        <div className='menuMasculino-div-MeusPedidos-Titulo'>
                    <div className='div-meusPedidos'>
                        <img src={ImagemMeusPedidos} alt='logo-meusPedidos' />
                        <p>Meus Pedidos</p>
                    </div>

                    <div className='MenuMasculino-div-titulo'>
                        <h1>Novidades</h1>
                        <hr />
                    </div>
                </div>

                <section className='MenuMasculino-section'>
                    <div className='div-CardsProd'>
                        <CardProdutos/>
                    </div>

                    <div className='Menu-div-buttomVerMais'>
                        <button> Ver mais...</button>
                    </div>

                    <div className='div-cards-Destaque' >
                        <div className='div-cardEmDestaque-Img01' >
                            <img src={Imagem01MenuNovidades} alt='imagem-01-menuMasculino' />
                            <h3>ENCONTRE SUA MARCA FAVORITA COM DESCONTOS IMPERDÍVEIS, NA MODELLE.</h3>
                        </div>

                        <div className='div-cardEmDestaque-Img02'>
                            <img src={Imagem02MenuNovidades} alt='imagem-01-menuMasculino' />
                            <h3>JAQUETA DE MONOGRAMA EM REVESTIMENTO DE PEITO SIMPLES LVSE </h3>
                        </div>
                    </div>
                    <div className='div-hr-card-Destaque'>
                        <hr className='hr-card-Destaque'/>
                    </div>
                
                    <div className='div-carrossel'>
                        <Carrossel />
                    </div>
                   
            </section>

            <Rodape />
        </main> 
    );
}