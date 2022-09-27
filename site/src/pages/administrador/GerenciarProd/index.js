
import CabeçalhoAdm from '../../../components/cabecalhoadm'

import Iconbuscar from '../../../assets/image/icon-buscar.svg'
import IconSeta from '../../../assets/image/icon-seta.svg'
import LogoRemover from '../../../assets/image/logo-remover.svg'
import LogoEditar from '../../../assets/image/logo-editar.svg'
import ImagemCard from '../../../assets/image/imagem-card.png'

import './index.scss';
import '../../../assets/common/index.scss'

export default function Index(){
    return(
       <main className='main-gerenciarProd' >
            <CabeçalhoAdm />
            
            <section>
                <div className='div-linha-titulos'>
                    <div className='div-input-buscar'>
                        <input type='text' className='gerenciarProd-input-buscar' placeholder='Buscar' />
                        <img src={Iconbuscar} alt='logo' className='logo-buscar' />
                    </div>

                    <div className='div-titulo-gerenciar'>
                        <h1 className='gerenciarProd-titulo'> Gerenciar produtos </h1>
                    </div>

                    <div className='div-titulo-gerenciar'>
                        <div className='div-nome-mes'>
                            <p className='gerenciarProd-fevereiro'> Fevereiro</p>
                            <img src={IconSeta} alt='logo' className='gerenciarProd-logo-buscar' /> 
                        </div>
                        <div className='select-mes'>
                            <input type='text' className='input-mes' placeholder='Mês: ' />
                        </div>
                        <div className='select-ano'>
                            <input type='text' className='input-ano' placeholder='Ano:  ' />
                        </div>
                    </div>
                </div>

 
                <div className='div-linha-cards'>
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




                <div className='gerenciarProd-card-2'>
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

                <div className='gerenciarProd-card-3'>
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






                <div className='gerenciarProd-card-4'>
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




                <div className='gerenciarProd-card-5'>
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
                </div>
            </section>
        </main> 
    );
}