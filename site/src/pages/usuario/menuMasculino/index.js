import { useNavigate} from 'react-router-dom'

import './index.scss';
import '../../../assets/common/index.scss'

import ImagemMeusPedidos from '../../../assets/image/logo-MeusPedidos.png'
import CabecalhoUser from '../../../components/cabecalhouser'
import Rodape from '../../../components/Rodapé'

import Imagem01MenuMasculino from '../../../assets/image/imagem01-menuMasculino.png'
import Imagem02MenuMasculino from '../../../assets/image/imagem02-menuMasculino.png'

import Carrossel from '../../../components/carrossel'

import CardProdutosMasculinos from '../../../components/carProdutosMenuMasculino'


export default function Index(){
    const navigate = useNavigate();

    function navegarPedidos(){
        navigate('/user/seusPedidos')
    }
    return(
       <main className='main-menuUsuario'>
        <CabecalhoUser /> 

                <div className='menuMasculino-div-MeusPedidos-Titulo'>
                    <div className='div-meusPedidos'>
                        <img src={ImagemMeusPedidos} alt='logo-meusPedidos' />
                        <p onClick={navegarPedidos}>Meus Pedidos</p>
                    </div>

                    <div className='MenuMasculino-div-titulo'>
                        <h1>Masculino</h1>
                        <hr />
                    </div>
                </div>

                <section className='MenuMasculino-section'>
                    <div className='div-CardsProd'>
                        <CardProdutosMasculinos />
                    </div>

                    <div className='div-cards-Destaque-menuMasculino' >
                        <div className='div-cardEmDestaque-Img01-menuMasculino' >
                            <img src={Imagem01MenuMasculino} alt='imagem-01-menuMasculino' />
                            <h3>ENCONTRE SUA MARCA FAVORITA COM DESCONTOS IMPERDÍVEIS, NA MODELLE.</h3>
                        </div>

                        <div className='div-cardEmDestaque-Img02-menuMasculino'>
                            <img src={Imagem02MenuMasculino} alt='imagem-01-menuMasculino' />
                            <h3>JAQUETA DE MONOGRAMA EM REVESTIMENTO DE PEITO SIMPLES LVSE </h3>
                        </div>
                    </div>
                    <div className='div-hr-card-Destaque'>
                        <hr className='hr-card-Destaque'/>
                    </div>
                   
            </section>

            <Rodape />
        </main> 
    );
}