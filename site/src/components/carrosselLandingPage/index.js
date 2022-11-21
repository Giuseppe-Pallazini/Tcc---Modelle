import './index.scss';
import '../../assets/common/index.scss'
import { Link } from 'react-router-dom';

import Imagem1 from '../../assets/image/produto-1.png';
import Imagem2 from '../../assets/image/produto-2.png';
import Imagem3 from '../../assets/image/produto-3.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Index() {


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


    return (
        <main className='main-carrossel-landingPage'>
            <Carousel
                autoPlaySpeed={1500}
                infinite={true} responsive={responsive}>

                <div className='slides'>
                    <img className='img-01' src={Imagem1} alt='imagem-carrossel' />
                    <div className='div-01'>
                        <h1 className='h1-01'> Coleção </h1>
                        <h3 className='h3-01'> Gucci </h3>

                        <p className='p1-01'> Jaqueta cropped Interlocking  </p>

                        <p className='p2-01'> Bordado GG Supreme, comprimento cropped. Fechamento frontal por zíper, gola alta, detalhe Web clássico, mangas longas e punhos elásticos.  </p>

                        <Link to='/user/detalhesProduto/1' className='link-01'> Descubra </Link>
                    </div>
                </div>

                <div className='slides-2' >
                    <img className='img-02' src={Imagem2} alt='imagem-carrossel' />
                    <div className='div-01'>
                        <h1 className='h1-01'> Coleção </h1>
                        <h3 className='h3-01'> Gucci </h3>

                        <p className='p1-01'> Camiseta oversized  </p>

                        <p className='p2-01'> Esta camiseta oversized com logo foi vista pela primeira vez na passarela da coleção Cruise 2017. </p>

                        <Link to='/user/detalhesProduto/2' className='link-01'> Descubra </Link>
                    </div>
                </div>

                <div className='slides-3' >
                    <img className='img-03' src={Imagem3} alt='imagem-carrossel' />
                    <div className='div-01'>
                        <h1 className='h1-01'> Coleção </h1>
                        <h3 className='h3-01'> Gucci </h3>

                        <p className='p1-01'> Moletom GG Supreme de canvas </p>

                        <p className='p2-01'> Canvas GG Supreme, fechamento frontal por zíper, dois bolsos laterais com lapelas, punhos elásticos e barra com acabamento elástico.  </p>

                        <Link to='/user/detalhesProduto/3' className='link-01'> Descubra </Link>
                    </div>
                </div>
            </Carousel>;
        </main>
    );
}