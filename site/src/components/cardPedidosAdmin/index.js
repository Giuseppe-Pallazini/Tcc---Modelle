import './index.scss'
import '../../assets/common/index.scss'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { alterarProduto, buscarImagem, visualizarPedido, visualizarPedidoPorId } from '../../api/produtoAPI'
import { toast } from 'react-toastify'

export default function Index(){
    const [produto, setProduto] = useState([]);
    const [status, setStatus] = useState();

        async function carregarUsuario(){
            let a = await visualizarPedido();
            setProduto(a)
            }


        async function alterarStatus(){
            try {
                await alterarStatus(produto.idPedido, status)
                toast.dark("Status alterado com sucesso");
            } catch (err) {
                toast.error(err.response.data.erro);
                console.log(err)
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
                        
                        <div>
                            <h1>Alterar Status</h1>
                            <div>
                                <input type='text' value={status} onChange={e => setStatus(e.target.value)} />
                                <button onClick={alterarStatus}>Ok</button>
                            </div>
                        </div>

                        <div>
                            <hr/>
                            
                        </div>



                    </main>
                    )}

                    <hr/>


        </section>
        
    )
}