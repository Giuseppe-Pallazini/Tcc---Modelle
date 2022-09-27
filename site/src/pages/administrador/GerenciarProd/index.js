
import CabeçalhoAdm from '../../../components/cabecalhoadm'
import Iconbuscar from '../../../assets/image/icon-buscar.svg'
import IconSeta from '../../../assets/image/icon-seta.svg'
import './index.scss';
import '../../../assets/common/index.scss'

export default function Index(){
    return(
       <main className='main-gerenciarProd' >
            <CabeçalhoAdm />
            <section>
                <div className='div-linha-titulos'>
                    <div className='div-input-buscar'>
                        <input type='text' className='gerenciarProd-input-buscar' placeholder='Buscar' />
                        <img src={Iconbuscar} alt='logo' className='logo-buscar' />
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
                    <div className='gerenciarProd-card-1'>

                    </div>

                    <div className='gerenciarProd-card-2'>

                    </div>

                    <div className='gerenciarProd-card-3'>

                    </div>

                </div>
            </section>
        </main> 
    );
}