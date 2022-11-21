import './index.scss'
import '../../assets/common/index.scss'
import ImagemProd from '../../assets/image/ImagemProd.png'

export default function Index(){

   
 
    return(
        <main className='main-CardProdutosMenuMasculino'>
            <div className='div-CardProdutosMenuMasculino'>
                <div className='CardProdutosMenuMasculino-div-imgs'>                    
                    <img onClick={favorito} src={favorito} alt='' className='logo-coração' />
                    <img src={ImagemProd} alt='' className='imagem-produto' />
                </div>
                    <h1>Burberry</h1>
                    <h3>Bermuda de prais xadrez</h3>

                <div className='div-MenuPreco'>R$ <p>1,458,00</p></div>
            </div>
        </main>
    );
}