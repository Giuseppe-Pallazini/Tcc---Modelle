import './index.scss'
import '../../assets/common/index.scss'
import ImagemProd from '../../assets/image/ImagemProd.png'
import IconCoracao from '../../assets/image/icon-listaDeDesejos.png'

export default function Index(){
    return(
        <main className='main-CardProdutosMenuMasculino'>
            <div className='div-CardProdutosMenuMasculino'>
                <div className='CardProdutosMenuMasculino-div-imgs'>
                    <img src={IconCoracao} alt='' className='logo-coração' />
                    <img src={ImagemProd} alt='' className='logo-produto' />
                </div>
                    <h1>Burberry</h1>
                    <h3>Bermuda de prais xadrex</h3>

                <div>R$ <p>1,458,00</p></div>
            </div>
        </main>
    );
}