import { Link, useNavigate } from 'react-router-dom'
import Storage from 'local-storage'


import Imagem1 from '../../../assets/image/logo_transparent-branco(svg).svg';
import Video1 from '../../../assets/video/aaa.mp4';
import imagem2 from '../../../assets/image/img-produto-1.png';
import iconCoracao from '../../../assets/image/icon-coracao.svg'
import iconBolsa from '../../../assets/image/icon-bolsa.png'
import iconUser from '../../../assets/image/icon-user.svg'
import './index.scss';
import '../../../assets/common/index.scss'
import { useEffect, useState, useRef } from 'react'
import { buscarProdutoPorId } from '../../../api/produtoAPI';

import Carrossel from '../../../components/carrosselLandingPage'


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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1// optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    useEffect(() => {
        carregarCarrinho()
    },[])



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
                        <div className='section1-group-direita-div1'>
                            <Link to='/login'> <img src={iconUser} alt='iconUser' /> </Link>
                            <div className='section1-group-direita-div1-group'>
                            <Link to='/user/carrinho'> <img src={iconBolsa} alt='iconBolsa' /> </Link>
                            <p className='section1-group-direita-div1-iconCarrinho'> {qtdItens()} </p>
                            </div>
                            <Link to='/user/listaDeDesejos'> <img src={iconCoracao} alt='iconCora' /> </Link>

                        </div>

                    </div>
                </div>

            </section>

            <section className='section-video'>

                <video autoPlay loop muted>

                    <source className='video' src={Video1} type='video/mp4' />

                </video>


                <h1 className='text-info'> CELEBRE A SEDA </h1>

                <div className='a'>
                    <a className='bt'> Compre agora </a>
                    <a className='by'> Descubra a campanha </a>
                </div>

            </section>

            <section className='section-slide'>

                <Carrossel />

            </section>




            <section> </section>
            <section> </section>
            <section> </section>


        </main>
    );
}