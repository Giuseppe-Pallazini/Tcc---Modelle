import './index.scss';
import '../../../assets/common/index.scss'
import CardProduto from '../../../components/cardGerenciarProduto'
import CabeçalhoAdm from '../../../components/cabecalhoadm'

import IconSeta from '../../../assets/image/icon-seta.svg'
import IconBuscar from '../../../assets/image/busca.png'

import { buscarPorNome } from '../../../api/produtoAPI';
import { useState } from 'react';


export default function Index(){
    const [filtro, setFiltro] = useState('');
    const [produto, setProduto] = useState([]);
    



    async function filtrar(){
        const resp = await buscarPorNome(filtro);
        setProduto(resp)
    }


    return(
       <main className='main-gerenciarProd' >
            <CabeçalhoAdm />
            
            <section>
                <div className='div-linha-titulos'>
                <div className='div-input-buscar'>
                <input type='text' className='gerenciarProd-input-buscar' placeholder='Buscar' value={filtro} onChange={e => setFiltro(e.target.value)} />
                <img src={IconBuscar} alt='logo' className='logo-buscar' onClick={filtrar}/>
            </div>

                    <div className='div-titulo-gerenciar'>
                        <h1 className='gerenciarProd-titulo'> Gerenciar produtos </h1>
                    </div>

                    <div className='div-titulo-gerenciar'>
                        <div className='div-nome-mes'>
                            <p className='gerenciarProd-fevereiro'> Fevereiro</p>
                            <img src={IconSeta} alt='logo' className='gerenciarProd-logo-buscar' /> 
                        </div>
                        <div className='select-mes'>
                            <input type='text' className='input-mes' placeholder='Mês: ' />
                        </div>
                        <div className='select-ano'>
                            <input type='text' className='input-ano' placeholder='Ano:  ' />
                        </div>
                    </div>
                </div>

 
                <div className='div-linha-cards'>
                    <CardProduto />
                   
                </div>
            </section>
        </main> 
    );
}