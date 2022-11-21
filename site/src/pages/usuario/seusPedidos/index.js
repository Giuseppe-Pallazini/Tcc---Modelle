import './index.scss';
import '../../../assets/common/index.scss'
import Cabecalho from '../../../components/cabecalhouser'
import BoxSeusPedidos from '../../../components/boxSeusPedidos'

export default function Index(){
    
    function voltar() {
        window.history.back()
    }

    return(
       <main className='main-VerSeusPedidos'>
            <Cabecalho />

            <div className='div-botaoVoltar'> 
                <button onClick={voltar}>Voltar</button>
            </div>
            <section className='section-SeusPedidos'>
                    <div className='div-TituloSeusPedidos'>
                        <h1>Seus pedidos: </h1>
                    </div>
                    <div className='div-boxSeusPedidos'>
                        <BoxSeusPedidos />
                    </div>
            </section>
        </main> 
    );
}