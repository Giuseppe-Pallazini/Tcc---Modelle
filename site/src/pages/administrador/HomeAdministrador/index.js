import './index.scss'
import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'
import Imagem1 from '../../../assets/image/img-user.png'
import Imagem2 from '../../../assets/image/img-exit.png'
import ImagemEngrenagem from '../../../assets/image/imagem-engrenagem.svg'
import ImagemEditarEventos from '../../../assets/image/imagem-editarEventos.svg'
import { Link } from 'react-router-dom'


import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){

    const navigate = useNavigate();

    function sair(){
        storage.remove('admin-logado')
        navigate('/')
    }

    return(
       <main className='main-homeAdmin'>
            <nav>
               <div className='cab-admin'>
                    <img className='cab-admin-img' src={Imagem1} alt=""/>
                    <span className='cab-admin-user'>Administrador</span>
                </div>

                <div onClick={sair} className='cab-exit'>
                    <img className='cab-exit-1' src={Imagem2} alt="" />
                    </div>
                </nav>
            
            <section className='section-homeAdm'>
                <div className='card-01-homeAdm'>
                    <div className='homeAdm-conteudo-card01'>
                        <div className='div-imagem-engrenagem'>
                            <img src={ImagemEngrenagem} alt='logo' className='homeAdm-img-engrenagem' />
                        </div>
                        <div className='homeAdm-titulo-card01'>
                            <h1> Gerenciamento </h1>
                            <hr className='hr-titulo-card01' />
                        </div>
                        <div className='home-adm-bt-linha1-card01'>
                            <Link to='/admin/gerenciarUsuarios' className='homeAdm-botão-usuarios' > Usuários </Link>
                            <Link to='/admin/gerenciarPed' className='homeAdm-botão-pedidos' > Pedidos </Link>
                        </div>

                        <div className='home-adm-bt-linha2-card01'>
                            <Link to='/admin/gerenciarProd' className='homeAdm-botão-produto' > Produtos </Link>
                            <Link to='/admin/gerenciarFeedbecks' className='homeAdm-botão-cadastro' > FeedBacks </Link>
                        </div>

                    </div>
                </div>






                <div className='card-02-homeAdm'>   
                    <div className='div-imagem-eventos'>
                        <img src={ImagemEditarEventos} alt='logo' className='homeAdm-img-editarEventos' />
                    </div>
                <div className='homeAdm-conteudo-card02'>
                        <div className='homeAdm-titulo-card02'>
                            <h1> Eventos </h1>
                            <hr className='hr-titulo-card02' />
                        </div>

                        <div className='home-adm-bt-linha1-card02'>
                            <Link to='/admin/cadastroproduto' className='homeAdm-botão-addModelos' > Add. Produto </Link>
                            <Link to='/admin/cadastrarCupom' className='homeAdm-botão-novidades' > Add. Cupom </Link>
                        </div>

                        <div className='home-adm-bt-linha2-card02'>
                            <Link to='/admin/alterarCard' className='homeAdm-botão-cardDestaque' > Card destaque </Link>
                            <Link to='/admin/gerenciarProd' className='homeAdm-botão-colecao' > Alter. Carrossel </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main> 
    );
}