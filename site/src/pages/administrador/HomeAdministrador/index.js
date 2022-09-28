import './index.scss'
import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'
import Imagem1 from '../../../assets/image/img-user.png'
import Imagem2 from '../../../assets/image/img-exit.png'
import ImagemEngrenagem from '../../../assets/image/imagem-engrenagem.svg'
import ImagemEditarEventos from '../../../assets/image/imagem-editarEventos.svg'

import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main className='main-homeAdmin'>
            <nav>
                <div className='cab-admin'>
                    <img className='cab-admin-img' src={Imagem1} alt=""/>
                    <span className='cab-admin-user'>Administrador</span>
                </div>

                <div className='cab-exit'>
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
                            <button className='homeAdm-botão-usuarios' > Usuários </button>
                            <button className='homeAdm-botão-pedidos' > Pedidos </button>
                        </div>

                        <div className='home-adm-bt-linha2-card01'>
                            <button className='homeAdm-botão-produto' > Produtos </button>
                            <button className='homeAdm-botão-cadastro' > Cadastro </button>
                        </div>


                        <div className='home-adm-bt-linha3-card01'>
                            <button className='homeAdm-botão-feedbecks' > Feedbacks </button>
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
                            <button className='homeAdm-botão-addModelos' > Add. Modelos </button>
                            <button className='homeAdm-botão-novidades' > Novidades </button>
                        </div>

                        <div className='home-adm-bt-linha2-card02'>
                            <button className='homeAdm-botão-cardDestaque' > Card em destaque </button>
                            <button className='homeAdm-botão-colecao' > Coleção </button>
                        </div>

                        <div className='home-adm-bt-linha3-card02'>
                            <button className='homeAdm-botão-addCupom' > Add. cupom </button>
                            <button className='homeAdm-botão-carrosel' > Carrosel </button>
                        </div>
                    </div>
                </div>
            </section>
        </main> 
    );
}