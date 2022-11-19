import { Link, useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import './index.scss';
import '../../../assets/common/index.scss'

import ImagemMeusPedidos from '../../../assets/image/logo-MeusPedidos.png'
import CabecalhoUser from '../../../components/cabecalhouser'
import Rodape from '../../../components/Rodapé'

import Imagem01MenuFeminino from '../../../assets/image/imagem01-menuFeminino.png'
import Imagem02MenuFeminino from '../../../assets/image/imagem02-menuFeminino.png'
import LogoValorFiltro from '../../../assets/image/logo-valor-filtro.png'

import Carrossel from '../../../components/carrossel'
import ImagemNext from '../../../assets/image/icon-seta-carrossel-2.png'

import CardProdutosFemininos from '../../../components/CardProdutosFemininos'

import {useEffect, useState, useRef} from 'react'
import { toast } from 'react-toastify';

export default function Index(){
    const navigate = useNavigate();

    function navegarPedidos(){
        if(storage('usuario-logado') || storage('admin-logado')){
        navigate('/user/seusPedidos')
        }
        else if(storage('usuario-logado')){
            toast.dark("Você não está logado")
        }
    }

    return(
       <main className='main-menuUsuario'>
        <CabecalhoUser /> 

           
        <div className='menuMasculino-div-MeusPedidos-Titulo'>
                    <div className='div-meusPedidos'>
                        <img src={ImagemMeusPedidos} alt='logo-meusPedidos' />

                            <p onClick={navegarPedidos} >Meus Pedidos</p>
                        
                    </div>

                    <div className='MenuMasculino-div-titulo'>
                        <h1>Feminino</h1>
                        <hr />
                    </div>
                </div>

                <section className='MenuMasculino-section'>
                    <div className='div-CardsProd'>
                        <CardProdutosFemininos />
                    </div>

                    <div className='Menu-div-buttomVerMais'>
                        <button> Ver mais...</button>
                    </div>

                    <div className='div-cards-Destaque-menuFeminino' >
                        <div className='div-cardEmDestaque-Img01-menuFeminino' >
                            <img src={Imagem01MenuFeminino} alt='imagem-01-menuMasculino' />
                            <h3>ENCONTRE SUA MARCA FAVORITA COM DESCONTOS IMPERDÍVEIS, NA MODELLE.</h3>
                        </div>

                        <div className='div-cardEmDestaque-Img02-menuFeminino'>
                            <img src={Imagem02MenuFeminino} alt='imagem-01-menuMasculino' />
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