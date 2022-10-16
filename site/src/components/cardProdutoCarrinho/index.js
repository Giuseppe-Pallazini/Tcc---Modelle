import './index.scss';
import '../../assets/common/index.scss'
import Camiseta from '../../assets/image/camiseta-preta-versace.png';

export default function Index(){
    return(
        <main className="main-carrinho-produtos">
            <div className='div-carrinho-cards-produtos'>
                    <div className='div-carrinho-infoProd'>
                        <div className='carrinho-div-imgProd'>
                            <img src={Camiseta} alt='img-produto' />
                        </div>
                        <div className='carrinho-div-informações-prod'>
                            <div className='div-carrinho-infromações-id'>
                                <div className='carrinho-p-ID'>ID:</div> 
                                <p className='carrinho-p-info-id'>01</p>
                            </div>

                            <div className='div-carrinho-informações-tituloProd'>
                                <h1 className='carrinho-nomeProd'> CAMISETA VERSACE</h1>
                            </div>

                            <div className='div-carrinho-informações-corProd'>
                                <p className='carrinho-textCor'> Cor </p>
                                <input className='carrinho-valorCor' type='color' />
                            </div>

                            <div className='div-carrinho-informações-tamanho'> 
                                <p className='carrinho-textTamanho'>Tamanho </p>
                                <p className='carrinho-valorTamanho'>M</p>
                            </div>

                            <div className='div-carrinho-informaões-qtdProd'>
                                <div className='carrinho-div-input-qtd'>
                                    <p className='carrinho-diminuir-qtd'>-</p>
                                    <input className='carrinho-input-qtd' type='text' placeholder='1' />
                                    <p className='carrinho-almentar-qtd'>+</p>
                                </div>
                                <div className='div-carrinho-valorProd'>
                                    <p className='carrinho-textValor'>R$ </p>
                                    <p className='carrinho-valorProd'> 1.345,00 </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className='quebra-hr' />
            </div>
        </main>
    );
}