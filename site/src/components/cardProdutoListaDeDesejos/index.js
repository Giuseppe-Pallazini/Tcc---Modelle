import './index.scss'
import '../../assets/common/index.scss'
import Camiseta from '../../assets/image/camiseta-preta-versace.png';
import IconCoracao from '../../assets/image/icon-coração.png'

export default function Index(){
    return(
        <main className='main-listaDeDesejos-produtos'>
            <div className='div-listaDeDesejos-cards-produtos'>
                    <div className='card-listadeDesejos-imagem-tamanho'>
                        <div className='card-div-imagem'>
                            <img src={Camiseta} alt='imagem-prod' className='card-div-imagem-img' />
                        </div>

                        <div className='div-input-tamanhos'>
                            <input type='check' placeholder='S' className='listaDesejos-input-tamanhos' />
                            <input type='check' placeholder='M' className='listaDesejos-input-tamanhos' />
                            <input type='check' placeholder='L' className='listaDesejos-input-tamanhos' />
                            <input type='check' placeholder='XL' className='listaDesejos-input-tamanhos' />
                        </div>
                    </div>

                    <div className='card-listadeDesejos-infosProd'>
                        <h1 className='card-listadeDesejos-tituloProd'> Doce & Gabbana </h1>
                        <h3 className='card-listadeDesejos-subtituloProd'> Kit 2 camisetas com estampa Medusa  </h3>
                        <p className='card-listadeDesejos-valorProd'><span className='card-listadeDesejos-refValor'>R$</span>1.345,00</p>

                        <p className='card-listadeDesejos-parcelasProd'>12x R$<span className='card-listadeDesejos-qtdParcela'>130,96</span>sem juros</p>

                        <div className='card-listadeDesejos-botãoAddCarrinho'>
                            <button className='card-listadeDesejos-botãoAddCarrinho-button'>Adicionar ao Carrinho</button>
                        </div>


                        <div className='card-listadeDesejos-comprar'>
                            <button className='card-listadeDesejos-comprar-button'>comprar</button>
                        </div>
                    </div>

                    <div className='card-listadeDesejos-logoCoração'>
                        <img src={IconCoracao} alt='logo-coração' className='card-listadeDesejos-logoCoração-img' />
                    </div>
            </div>
        </main>
    );
}