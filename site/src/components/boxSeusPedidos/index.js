import './index.scss'
import '../../assets/common/index.scss'
import { Link, useParams } from 'react-router-dom'
import ImgProd from '../../assets/image/img-Prod.png'
import IconsFluxo from '../../assets/image/icons-fluxo.png'
import { useEffect, useState } from 'react'
import { buscarImagem, visualizarPedidoPorId } from '../../api/produtoAPI'
import { API_URL } from '../../api/config'
import Storage from 'local-storage'

export default function Index(){
    const [produto, setProduto] = useState([]);

    const {setIdProduto} = useState(Storage('usuario-logado').id);

    function carregarUsuario(){

        let id = '';

        if(Storage('usuario-logado')){
        id = Storage('usuario-logado').id;
        let usuario = Storage('usuario-logado');
        setIdProduto(id);

        let a = visualizarPedidoPorId(setIdProduto);
        return a
        }
    }
    
useEffect(() => {
    carregarUsuario();
}, [])




    function mostrarImagem(imagem) {
            return buscarImagem(imagem)
    }
    

    return(
        <section>
            {produto.map(item =>
            <main className='main-boxSeusProdutos'>
                        <div className='div-numeroPedido'>
                            <p><span>#</span>{item.idPedido}</p>
                        </div>

                        <div className='Infos1-pedido'>
                            <div className='faixa-preta-infos1'>
                                <h1>Informações do pedido</h1>
                            </div>
                            
                            <div className='div-informaçõesdoPedido'>
                                <div className='div-cl1-infos01'>
                                    <div className='div-informacoesda-cl1' >Pedido<p>{item.idPedido}</p></div>
                                    <div className='div-informacoesda-cl1' >Enviado por:<p> {item.marcaProduto}</p></div>
                                    <div className='div-informacoesda-cl1' >Forma de pagamento<p> {item.pagamento}</p></div>
                                </div>
                                <div className='div-cl2-infos01'>
                                    <div className='div-informacoesda-cl2' >
                                        Situação do envio
                                        <span> até {item.dataDoPedido.substr(0,10)} </span>
                                    </div>
                                </div>

                                <div className='div-cl3-infos01'>
                                    <div className='div-informacoesda-cl3'> 
                                        Endereço de entrega:
                                        <span> {item.Endereço} {item.NumeroEndereço} - {item.Cidade} , 
                                            {item.Cep}
                                            
                                        </span>
                                    </div>
                                </div>

                                <div className='div-cl4-infos01'>
                                    <div>Resumo do pagamento: </div>
                                    <div className='div-informacoesda-cl4'>Valor do item: R$<p> {item.valorProduto}</p></div>
                                    <div className='div-informacoesda-cl4'>Total geral: R$<p> {item.totalItem}</p></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='InfosDetalhes-pedido'>
                            <div className='faixaPreta-detalhesPed'>
                                <div className='faixaPreta-InformacoesDetalhes-cl1'>
                                    Pedido Realizado
                                    <span>{item.dataDoPedido.substr(0,10)} </span>
                                </div>
                                <div className='faixaPreta-InformacoesDetalhes-cl2'>
                                    Total: <p>R$ <span>{item.totalItem}</span></p>
                                </div>
                                <div className='faixaPreta-InformacoesDetalhes-cl3'>
                                    Enviado para <span> {item.nomeUsuario} </span>
                                </div>
                                <div className='faixaPreta-InformacoesDetalhes-cl4'>
                                    Detalhes do pedido | <span> {item.statudDoPedido}</span>
                                </div>
                            </div>

                            <div className='div-detalhesPed-DetProd'>
                                <div className='div-InfoProduto-desc'>
                                    <div className='infoProd-img'>
                                        <img src={mostrarImagem(item.imagem)} alt='imagemProd' />
                                    </div>
                                    <div className='infoProd-Descrições'>
                                        <h3>{item.nomeProduto}</h3>
                                        <p>{item.marcaProduto}</p>

                                        <div className='infoProd-desc' >Cor: 
                                            <div className='cor' style={{ backgroundColor: item.corProduto }}>
                                            </div> 
                                        </div>
                                        <div className='infoProd-desc' >Tamanho: <span>{item.tamanho}</span></div>
                                        <div className='infoProd-desc' >Valor unitario: <span>{item.valorProduto}</span></div>
                                        <div className='infoProd-desc' >Quantidade: <span> {item.qtdProduto}</span></div>

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
                    )}




        </section>
        
    )
}