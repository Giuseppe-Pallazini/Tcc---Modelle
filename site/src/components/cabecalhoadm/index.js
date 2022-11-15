import './index.scss'
import Imagem1 from '../../assets/image/img-user.png'
import Imagem2 from '../../assets/image/img-exit.png'
import { Link, useNavigate } from 'react-router-dom'
import storage from 'local-storage'
 

export default function Index(){

    const navigate = useNavigate();

    function sair(){
        storage.remove('admin-logado')
        navigate('/')
    }

    return(
        <header>
            <nav className='cab'>
                <div className='cab-admin'>
                <div className='cab-div-exit'>
                    <Link className='cab-exit' to='/admin/home'>
                        <img className='cab-admin-img' src={Imagem1} alt=""/>
                    </Link>
                    <span className='cab-admin-user'>Administrador</span>
                </div>
                    
                </div>

                <div className='cab-canvas'>
                    <select className='cab-canvas-gerenc' name="Gerenciamento">
                        <Link to='/admin/gerenciarProd' className='cab-canvas-dc' value="Gerenciamento">Gerenciamento </Link>
                        <option className='cab-canvas-dc' value="Usuario">Usuarios</option>
                        <option className='cab-canvas-dc' value="Pedidos">Pedidos</option>
                        <option className='cab-canvas-dc' value="Produtos">Produtos</option>
                        <option className='cab-canvas-dc' value="Feedbacks">Feedbacks</option>
                        <option className='cab-canvas-dc' value="Add. Cupom">Add. Cupom</option>
                    </select>

                <select className='cab-canvas-event' name="Eventos">
                        <option className='cab-canvas-dc' value="Eventos">Eventos</option>
                        <option className='cab-canvas-dc' value="Add. modelos">Add. modelos</option>
                        <option className='cab-canvas-dc' value="Novidades">Novidades</option>
                        <option className='cab-canvas-dc' value="Colecoes">Coleções</option>
                        <option className='cab-canvas-dc' value="Card Destaque">Card destaque</option>
                        <option className='cab-canvas-dc' value="Carrossel">Carrossel</option>
                    </select>
                </div>

                <div onClick={sair} className='cab-exit'>
                         <img className='cab-exit-1' src={Imagem2} alt=''/>
                </div>
            </nav>
        </header>
    )
}