
import './index.scss';
import '../../../assets/common/index.scss'

import Cabecalho from '../../../components/cabecalhouser/index.js'
import Rodape from '../../../components/Rodapé/index.js'
import CardProd from '../../../components/cardProdutoListaDeDesejos'

export default function Index(){
    return(





       <main className='main-listaDeDesejos'>
            <Cabecalho />   
            <section className='listaDeDesejos-section-principal'>
                <div className='Div-listaDeDesejos-titulo' >
                    <h1> LISTA DE DESEJOS </h1>
                </div>
            
                    <CardProd />

                    <CardProd />

                    <CardProd />
                    
                    <CardProd />

            </section>

            <Rodape />
        </main> 
    );
}