import './index.scss'
import '../../assets/common/index.scss'
import Imagem1 from '../../assets/image/logo_transparent-white.png'
import Imagem2 from '../../assets/image/logo-lupa.png'
import Imagem3 from '../../assets/image/bolsa-lista-desejo.png'
import Imagem4 from '../../assets/image/carrinho.svg'
import Imagem5 from '../../assets/image/user.png'
import {useNavigate} from 'react-router-dom'

export default function Index(){
    
    const navigate = useNavigate();


    function abrirNovidades(){
        navigate(`/user/menuNovidades`)
    }

    function abrirFeminino(){
        navigate(`/user/menuFeminino`)
    }

    function abrirMasculino(){
        navigate(`/user/menuMasculino`)
    }

    return(
        <main>
            <nav className='cab-user'>
                <div className='cab-user-txt'>
                    <h1 className='cab-user-txt-1'>M o d e l l e</h1>
                </div>

                <div className='cab-user-topicos'>
                    <div className='cab-user-logo'>
                        <img src={Imagem1} alt=''/>
                    </div>

                    <div className='cab-user-divisoria'>
                        <hr/>
                    </div>
                    
                    <div className='cab-topic'>
                        <p onClick={abrirNovidades} className='cab-topic-nov'> 
                            Novidades
                        </p>

                        <p onClick={abrirFeminino} className='cab-topic-mul' >
                            Mulher
                        </p>

                        <p onClick={abrirMasculino} className='cab-topic-hom'>
                            Homem
                        </p>
                    </div>
                </div>

                <div className='cab-menu'>
                    <div className='cab-busca'>
                        <img className='cab-user-logo-lupa' src={Imagem2} alt='' />
                        <p className='cab-user-txt-2'>Buscar</p>
                    </div> 

                    <div className='cab-lista'>                        
                        <p className='cab-user-lista'>Lista de desejos</p>
                        <img className='cab-user-lista-img' src={Imagem3} alt=''/>
                    </div>

                    <div className='cab-carrinho' >
                        <img className='cab-user-carrinho' src={Imagem4} alt=''/>
                        <div className='cab-user-carrinho-div'>
                            <span className='cab-user-carrinho-num'>0</span>
                        </div>

                    </div>

                    <div className='cab-user-1' >
                        <p className='cab-user-nome'>Usuario</p>
                        <img className='cab-user-img' src={Imagem5} alt='' />
                    </div>
                </div>
            </nav>
        </main>
    )
}   