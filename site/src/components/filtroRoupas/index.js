import './index.scss';
import '../../assets/common/index.scss'
import { Link } from 'react-router-dom';
import LogoSeta from '../../assets/image/logo-MeusPedidos.png'

export default function Index(){
    return(
        <main className='main-filtroProdutos'>
            <div>
                <div className='filtro-titulo'>
                    <h1>Filtrar por: </h1>
                </div>

                <div className='filtro-marca'>
                    <select>
                        <option>
                            <img src={LogoSeta} alt='logo-seta' />
                            marca
                        </option>
                        <option>
                            <img src='' alt='logo-seta' />
                            <p>Marca</p>
                        </option>

                    </select>
                </div>
            </div>
        </main>
    );
}