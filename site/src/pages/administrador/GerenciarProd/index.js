import './index.scss';
import '../../../assets/common/index.scss'
import CardProduto from '../../../components/cardGerenciarProduto'
import CabeçalhoAdm from '../../../components/cabecalhoadm'

export default function Index(){
    
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