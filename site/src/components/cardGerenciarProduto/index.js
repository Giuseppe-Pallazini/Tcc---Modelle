import './index.scss'
import LogoRemover from '../../assets/image/logo-remover.svg'
import LogoEditar from '../../assets/image/logo-editar.svg'
import ImagemCard from '../../assets/image/imagem-card.png'

 

export default function Index(){
    return(
        <div className='gerenciarProd-card-1'>
                        <div className='gerenciarProd-div-icons'>
                            <img src={LogoRemover} alt='logo' className='logo-remover' />
                            <img src={LogoEditar} alt='logo' className='logo-editar' />
                        </div>
                        <img src={ImagemCard} alt='imagem' className='gerenciarProd-imagem-card' />
                        <h1 className='marca-produto-card'> Burberry </h1>
                        <p className='descricao-produto-card'> Bermuda de praia xadrex </p>
                        
                        <div className='gerenciarProd-div-preco'>
                            <p className='preço-produto-card'> R$</p>
                            <p className='valor-produto-card'> 2.450,00 </p>
                        </div>

                        <div className='gerenciarProd-div-cor' >
                            <p className='cor-produto-card'> Cor </p>
                            <p className='valorCor-produto-card'> Marrom </p>
                        </div>
                        
                        <div className='gerenciarProd-div-modelo' >
                            <p className='modelo-produto-card'> Modelo </p>
                            <p className='valorModelo-produto-card'> Bermuda </p>
                        </div>

                        <div className='gerenciarProd-div-tamanhos' >
                            <p className='tamanho-produto-card'> Tamanho </p>
                            <div className='valorTamanho-produto-card'>
                                <p className='tamanhoProduto-card'> PP </p>
                                <p className='tamanhoProduto-card'> M </p>
                                <p className='tamanhoProduto-card'> G </p>
                            </div>
                        </div>


                        
                        <div className='gerenciarProd-div-disponivel' >
                            <p className='disponivel-produto-card'> disponibilidade </p>
                            <p className='valorDisponivel-produto-card'> 7 </p>
                        </div>

                        <div className='gerenciarProd-div-categoria' >
                            <p className='categoria-produto-card'> Categoria </p>
                            <p className='valorCategoria-produto-card'> Novidades </p>
                        </div>

                        <div className='gerenciarProd-div-genero' >
                            <p className='genero-produto-card'> Genêro </p>
                            <p className='valorMasculino-produto-card'> Masculino </p>
                        </div>

                        <div className='gerenciarProd-div-id' >
                            <p className='id-produto-card'> ID: </p>
                            <p className='valorId-produto-card'> 01 </p>
                        </div>
                    </div>
    )
}