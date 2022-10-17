import './index.scss';
import '../../../assets/common/index.scss'
import CardProduto from '../../../components/cardGerenciarProduto'
import CabeçalhoAdm from '../../../components/cabecalhoadm'

import IconSeta from '../../../assets/image/icon-seta.svg'
import IconLupa from '../../../assets/image/logo-lupa.png'

import { buscarPorNome } from '../../../api/produtoAPI';
import { useState, useNavigate } from 'react';


export default function Index(){
    const [produto, setProduto] = useState([]);
    

    return(
       <main className='main-gerenciarProd' >
            <CabeçalhoAdm />
            
            <section>
                <div className='div-linha-titulos'>
                    <div className='div-input-buscar'>

                    </div>
                    <div className='div-titulo-gerenciar'>
                        <h1 className='gerenciarProd-titulo'> Gerenciar produtos </h1>
                    </div>
                </div>

 
                <div className='div-linha-cards'>
                    <CardProduto />
                   
                </div>
            </section>
        </main> 
    );
}