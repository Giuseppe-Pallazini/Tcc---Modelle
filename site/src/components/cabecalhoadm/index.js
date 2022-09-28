import './index.scss'
import Imagem1 from '../../assets/image/img-user.png'
import Imagem2 from '../../assets/image/img-exit.png'
 
export default function Index(){
    return(
        <main>
            <nav className='cab'>
                <div className='cab-admin'>
                    <img className='cab-admin-img' src={Imagem1} alt=""/>
                    <span className='cab-admin-user'>Administrador</span>
                </div>

                <div className='cab-canvas'>
                    <select className='cab-canvas-gerenc' name="Gerenciamento">
                        <option className='cab-canvas-dc' value="Gerenciamento">Gerenciamento</option>
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

                <div className='cab-exit'>
                    <img className='cab-exit-1' src={Imagem2} alt="" />
                </div>
            </nav>
        </main>
    )
}