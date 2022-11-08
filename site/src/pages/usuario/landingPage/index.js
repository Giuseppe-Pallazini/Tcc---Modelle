import { Link, useNavigate } from 'react-router-dom'
import storage from 'local-storage'


import Imagem1 from '../../../assets/image/logo_transparent-branco(svg).svg';
import Video1 from '../../../assets/video/aaa.mp4';
import imagem2 from '../../../assets/image/img-produto-1.png';
import './index.scss';
import '../../../assets/common/index.scss'
import { useEffect, useState, useRef } from 'react'

export default function Index() {
    return (
        <main className='main-landingpage'>

            <section className='landingpage-section1'>

                <div className='section1-groups'>
                    <div className='section1-group-esquerda'>
                        <div>
                            <div className='section1-div-logo'>
                                <img className='section1-logo' src={Imagem1} alt='img1' />
                            </div>

                        <div className='section1-div1-agrupamento'>
                            <div className='section1-div1'>
                                <Link to='/user/menuNovidades' className='section1-div1-nov'> Novidades </Link>
                                <Link to='/user/menuMasculino' className='section1-div1-hom'> Homem </Link>
                                <Link to='user/menuFeminino' className='section1-div1-mul'> Mulher </Link>
                            </div>
                        </div>
                        </div>

                        <div>
                            <div className='section1-div2'>
                                <p className='section1-div2-p1'> Novidades para elas</p>
                                <Link className='section1-div2-link' to='/user/menuFeminino'> Confira os lançamentos </Link>

                                <p className='section1-div2-p2'> * Até 02/23</p>
                            </div>
                        </div>

                    </div>

                    <div className='section1-group-direita'>
                        <h1> Oi </h1>

                    </div>
                </div>

            </section>

            <section className='section-video'>

                <video autoPlay loop muted>

                    <source className='video' src={Video1} type='video/mp4' />

                </video>


                <h2 className='text-info'> CELEBRE A SEDA </h2>

                <div className='a'>
                <button className='bt'> Compre agora </button>
                <button className='by'> Descubra a campanha</button>
                </div>
             


            </section>

            <section className='section-slide'>

                <div className='slides'>


                    <div>

                        <img src={imagem2} alt='img-2' />

                    </div>




                    <input type='radio' name='radio' id='radio1' checked />
                    <input type='radio' name='radio' id='radio2' />
                    <input type='radio' name='radio' id='radio3' />

                </div>

                <div>

                </div>




            </section>




            <section> </section>
            <section> </section>
            <section> </section>


        </main>
    );
}