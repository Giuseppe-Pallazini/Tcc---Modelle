import './index.scss';
import '../../assets/common/index.scss'
import { Link } from 'react-router-dom';

import Imagem1 from '../../assets/image/img1-carrossel-landingpage.png'
import Imagem2 from '../../assets/image/imagem02-carroussel.png'
import Imagem3 from '../../assets/image/imagem03-carroussel.png'

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
                    <h1 className='h1-01'> Conscious </h1>
                    <h3 className='h3-01'> Nanushka</h3>

                    <p className='p1-01'> Blazer Hathi com abotoamento simples. </p>

                    <p className='p2-01'> Lapelas, mangas longas, fechamento frontal por botões, bolso no busto com debrum, bolsos frontais com lapelas e detalhe de fenda.</p>

                    <Link to='/user/menuNovidades' className='link-01'> Descubra </Link>
                    </div>
                </div>
            
                <div className='slides-2' >
                    <img className='img-02' src={Imagem2} alt='imagem-carrossel'/>
                    <div className='div-01'> 
                    <h1 className='h1-01'> Conscious </h1>
                    <h3 className='h3-01'> Nanushka</h3>

                    <p className='p1-01'> Blazer de lã com abotoamento simples </p>

                    <p className='p2-01'> Blazer de lã com abotoamento simples Café, lã, colarinho inglês, fechamento frontal por botões, mangas longas, bolso com fenda no busto e fenda inglesa posterior. </p>

                    <Link to='/user/menuNovidades' className='link-01'> Descubra </Link>
                    </div>
                </div>
          
                <div className='slides-3' >
                    <img className='img-03' src={Imagem3} alt='imagem-carrossel'/>
                    <div className='div-01'> 
                    <h1 className='h1-01'> Conscious </h1>
                    <h3 className='h3-01'> Nanushka</h3>

                    <p className='p1-01'> Cinto dupla face Dailey </p>

                    <p className='p2-01'> Cinto dupla face Dailey Amarelo manteiga, modelagem dupla face, ferragem dourada, fechamento por fivelas e perfurações.</p>

                    <Link to='/user/menuNovidades' className='link-01'> Descubra </Link>
                    </div>
                </div>
            </Carousel>;
        </main>
    );
}