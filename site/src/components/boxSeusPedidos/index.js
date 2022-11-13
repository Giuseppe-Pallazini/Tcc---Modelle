import './index.scss'
import '../../assets/common/index.scss'
import { Link } from 'react-router-dom'
import ImgProd from '../../assets/image/img-Prod.png'
import IconsFluxo from '../../assets/image/icons-fluxo.png'

export default function Index(){
    return(
        <main className='main-boxSeusProdutos'>
            <div className='div-numeroPedido'>
                <p><span>#</span>01</p>
            </div>

            <div className='Infos1-pedido'>
                <div className='faixa-preta-infos1'>
                    <h1>Informações do pedido</h1>
                </div>
                
                <div className='div-informaçõesdoPedido'>
                    <div className='div-cl1-infos01'>
                        <div className='div-informacoesda-cl1' >Pedido<p>01</p></div>
                        <div className='div-informacoesda-cl1' >Enviado por:<p>  Modelle</p></div>
                        <div className='div-informacoesda-cl1' >Forma de pagamento<p> cartão</p></div>
                    </div>
                    <div className='div-cl2-infos01'>
                        <div className='div-informacoesda-cl2' >
                            Situação do envio
                            <span> até 02/09/2022 </span>
                        </div>
                    </div>

                    <div className='div-cl3-infos01'>
                        <div className='div-informacoesda-cl3'> 
                            Endereço de entrega:
                            <span> Rua das orquideas 100 
                                casa Jd Azano II 
                                São Paulo SP,04854-500 
                                Brasil
                            </span>
                        </div>
                    </div>

                    <div className='div-cl4-infos01'>
                        <div>Resumo do pagamento: </div>
                        <div className='div-informacoesda-cl4'>Valor do item: R$<p> 1.425</p></div>
                        <div className='div-informacoesda-cl4'>Subtotal frete: R$<p> 00.00</p></div>
                        <div className='div-informacoesda-cl4'>Total: R$<p> 1.425</p></div>
                        <div className='div-informacoesda-cl4'>Total geral: R$<p> 1.425</p></div>
                    </div>
                </div>
            </div>
            
            <div className='InfosDetalhes-pedido'>
                <div className='faixaPreta-detalhesPed'>
                    <div className='faixaPreta-InformacoesDetalhes-cl1'>
                        Pedido Realizado
                        <span>22 de Agosto de 2022 </span>
                    </div>
                    <div className='faixaPreta-InformacoesDetalhes-cl2'>
                        Total: <p>R$ <span>1.948</span></p>
                    </div>
                    <div className='faixaPreta-InformacoesDetalhes-cl3'>
                        Enviado para <span> Giu pallazini </span>
                    </div>
                    <div className='faixaPreta-InformacoesDetalhes-cl4'>
                        Detalhes do pedido | <span> EM PROCESSO</span>
                    </div>
                </div>

                <div className='div-detalhesPed-DetProd'>
                    <div className='div-InfoProduto-desc'>
                        <div className='infoProd-img'>
                            <img src={ImgProd} alt='imagemProd' />
                        </div>
                        <div className='infoProd-Descrições'>
                            <h3>Kit 2 camisetas com estampa medusa</h3>
                            <p>Versace</p>

                            <div className='infoProd-desc' >Cor: <span>Preta</span></div>
                            <div className='infoProd-desc' >Tamanho: <span>M</span></div>
                            <div className='infoProd-desc' >Valor unitario: <span>1.345</span></div>
                            <div className='infoProd-desc' >Quantidade: <span> 01</span></div>

                        </div>
                    </div>

                    <div className='infoPed-feedback'>
                        <div className='infoPed-iconsFluxo'>
                            <img src={IconsFluxo} alt='iconsFluxo' />
                        </div>

                        <div className='infoPed-btnFeedback'>
                            
                            <Link to='/user/feedback'>
                                <button>Enviar feedback</button>
                            </Link>
                        </div>


                        <div className='infoPed-btnComprarNovamente'>
                            <button>Comprar novamnte</button>
                        </div>

                        <div className='infoPed-ConfirmaçãoPed'>
                            <button>Recebido?</button>
                            <div className='div-confirmacaoPed'>sim <input type='checkbox' /></div>
                        </div>
                    </div>

                </div>

            </div>

        </main>
    )
}