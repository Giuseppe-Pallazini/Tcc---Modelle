import { Link } from 'react-router-dom'
import Storage from 'local-storage'


import Imagem1 from '../../../assets/image/logo_transparent-branco(svg).svg';
import Video1 from '../../../assets/video/aaa.mp4';
import iconBolsa from '../../../assets/image/icon-bolsa.png'
import iconUser from '../../../assets/image/icon-user.svg'
import ImgCardOffWhite from '../../../assets/image/card-offWhite.png'
import ImgCardDouceGabbana from '../../../assets/image/card-douceEgabbana.png'
import './index.scss';
import '../../../assets/common/index.scss'
import { useEffect, useState } from 'react'
import { buscarProdutoPorId } from '../../../api/produtoAPI';

import Carrossel from '../../../components/carrosselLandingPage'
import Rodape from '../../../components/Rodapé';


export default function Index() {
    const [itens, setItens] = useState([]);

    async function carregarCarrinho() {
        let carrinho = Storage('carrinho')
        if (carrinho) {

            let temp = [];

            for (let produto of carrinho) {
                let p = await buscarProdutoPorId(produto.id);

                temp.push({
                    produto: p,
                    qtd: produto.qtd,
                })
            }
            setItens(temp)
        }

    }

    useEffect(() => {
        carregarCarrinho()
    }, [])



    function qtdItens() {
        return itens.length
    }

    return (
        <main className='main-landingpage'>

            <section className='landingpage-section1'>

                <div className='section1-groups'>
                    <div className='section1-group-esquerda'>
                        <div className='section1-group-esquerda-div1'>
                            <div className='section1-div-logo'>
                                <img className='section1-logo' src={Imagem1} alt='img1' />
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
                        <div className='section1-group-direita-div1'>
                            <Link to='/login'> <img src={iconUser} alt='iconUser' /> </Link>
                            <div className='section1-group-direita-div1-group'>
                                <Link to='/user/carrinho2'> <img src={iconBolsa} alt='iconBolsa' /> </Link>
                                <p className='section1-group-direita-div1-iconCarrinho'> {qtdItens()} </p>
                            </div>
                         
                        </div>

                    </div>
                </div>

            </section>

            <section className='section-video'>

                <div className='div-text-video'>
                    <div className='div-text-video-2'>
                        <h1 className='text-info'> CELEBRE A SEDA </h1>

                        <div className='a'>
                            <Link to='/user/menuNovidades' className='by'> Descubra a campanha </Link>
                        </div>
                    </div>
                </div>

                <video autoPlay loop muted>

                    <source className='video' src={Video1} type='video/mp4' />
                </video>

            </section>

            <section className='section-slide'>

                <Carrossel />

            </section>




            <section className='section-cardsMarcas'>
                <div className='div-cardOffWhite'>
                    <img src={ImgCardOffWhite} alt='imagem card landing page' />
                    <h3>Felicidade esta em se vestir com OFF-White, celebre cada comendo com a marca.</h3>
                </div>

                <div className='div-cardDolceGabbana'>
                    <img src={ImgCardDouceGabbana} alt='imagem card landing page' />
                    <h3> Eternize seu amor pela marca com a seleção de peças finas, na Modelle</h3>
                </div>
            </section>

            <section className='section-descubraModelle'>
                <div className='div-texto-descubraModelle'>
                    <h1>Descubra Modelle</h1>
                </div>
                <div>
                    <Link to='/login'>
                        <button className='botao-descubraModelle'>Descubra</button>
                    </Link>
                </div>
            </section>

            <Rodape />


        </main>
    );
}