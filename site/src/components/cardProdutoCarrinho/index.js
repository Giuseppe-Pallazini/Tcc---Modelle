import './index.scss';
import '../../assets/common/index.scss'
import { buscarImagem } from '../../api/produtoAPI'

export default function Index(props) {

    function mostrarImagem(imagem) {
        console.log(imagem)

        return buscarImagem(imagem)

    }


    return (
        <main className="main-carrinho-produtos">
            <div className='div-carrinho-cards-produtos'>
                <div className='div-carrinho-infoProd'>
                    <div className='carrinho-div-imgProd'>
                        <img className='carrinho-div-imgProd-img' src={mostrarImagem(props.item.produto.imagens)} alt='img-produto' />
                    </div>
                    <div className='carrinho-div-informações-prod'>
                        <div className='div-carrinho-infromações-id'>
                            <div className='carrinho-p-ID'>ID:</div>
                            <p className='carrinho-p-info-id'> {props.item.produto.info.id} </p>
                        </div>

                        <div className='div-carrinho-informações-tituloProd'>
                            <h1 className='carrinho-nomeProd'> {props.item.produto.info.produto} </h1>
                        </div>

                        <div> {props.item.produto.info.complemento} </div>

                        <div className='div-carrinho-informações-corProd'>
                            <p className='carrinho-textCor'> {props.item.produto.info.cor} </p>
                        </div>

                        <div className='div-carrinho-informações-tamanho'>
                            <p className='carrinho-textTamanho'>Tamanho </p>
                            <p className='carrinho-valorTamanho'> {props.item.produto.tamanho} </p>
                        </div>

                        <div className='div-carrinho-informaões-qtdProd'>
                            <div className='carrinho-div-input-qtd'>
                                <p className='carrinho-diminuir-qtd'>-</p>
                                <p className='carrinho-input-qtd' type='text' placeholder='1' maxLength='0'></p>
                                <p className='carrinho-almentar-qtd'>+</p>
                            </div>
                            <div className='div-carrinho-valorProd'>
                                <p className='carrinho-textValor'> R$ </p>
                                <p className='carrinho-valorProd'> {props.item.produto.info.preco} </p>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className='quebra-hr' />
            </div>
        </main>
    );
}