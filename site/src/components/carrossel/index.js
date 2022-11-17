import './index.scss';
import '../../assets/common/index.scss'
import { Link } from 'react-router-dom';

import Imagem1 from '../../assets/image/image1-carrosel.png'
import Imagem2 from '../../assets/image/imagem-Biber.png'
import Imagem3 from '../../assets/image/image3-carrosel.png'

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
            breakpoint: { max: 414, min: 414 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <main className='main-carrossel'>

            <Carousel 
              autoPlaySpeed={1500}
              infinite={true} responsive={responsive}>
                <div>
                    <div className='div-textoCarrousel'>
                        <h1>EXPERIMENTE A MODELLE</h1>
                        <p>e você? Está esperando o que?</p>

                        <img className='img-01' src={Imagem1} alt='imagem-carrossel'/>
                    </div>
                   
                </div>
            
                <div>
                    <div className='div-textoCarrousel'>
                        <h1>EXPERIMENTE A MODELLE</h1>
                        <p>e você? Está esperando o que?</p>

                        <img className='img-02' src={Imagem2} alt='imagem-carrossel'/>
                    </div>
                    
                </div>
          
                <div>
                    <div className='div-textoCarrousel'>
                        <h1>EXPERIMENTE A MODELLE</h1>
                        <p>e você? Está esperando o que?</p>

                         <img className='img-03' src={Imagem3} alt='imagem-carrossel'/>
                    </div>
                   
                </div>
            </Carousel>;
        </main>
    );
}