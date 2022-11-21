import './index.scss'
import '../../assets/common/index.scss'
import { useEffect, useState } from 'react'
import { buscarImagem, visualizarPedidoPorId } from '../../api/produtoAPI'
import { API_URL } from '../../api/config'
import Storage from 'local-storage'
import { alterarStatusPedido } from '../../api/pedidoAPI'

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { toast } from 'react-toastify'

export default function Index(){
    const [produto, setProduto] = useState([]);
    console.log(produto)

    const [IdProduto] = useState(Storage('usuario-logado').id);
    console.log(IdProduto);

    async function carregarUsuario(){
        let a = await visualizarPedidoPorId(IdProduto);
        setProduto(a)
        }
    
useEffect(() => {
    carregarUsuario();
}, [])


    async function alterarStatus(id, nome){
        confirmAlert({
            title: ' Alterar Status',
            message: `Confirmar entrega do ${nome}`,
            buttons: [
                {
                    label: 'sim',
                    onClick: async () => {
                        const resposta = await alterarStatusPedido(id);
                        await carregarUsuario();
                        toast.dark('Produto entregue com sucesso!')
                    }
                },
                {
                    label: 'não'
                }
            ]
        })

    }



function mostrarImagem(imagem) {
    if (typeof (imagem) == 'object') {
        return URL.createObjectURL(imagem);
    }

    else if (typeof (imagem) == 'string') {
        return `${API_URL}/${imagem}`
    }

    else {
        return buscarImagem(imagem)
    }
}
    

    return(
        <section>
            {produto.map( (item, i) =>
            <main className='main-boxSeusProdutos'>

            <div className='Infos1-pedido'>
                <div className='faixa-preta-infos1'>
                    <h1>Informações do pedido</h1>
                </div>

                <div className='div-informaçõesdoPedido'>
                    <div className='div-cl1-infos01'>
                        <div className='div-informacoesda-cl1' >Pedido: <p>{item.idPedido}</p></div>
                        <div className='div-informacoesda-cl1' >Enviado por: <p> Correios </p> </div>
                        <div className='div-informacoesda-cl1' >Forma de pagamento: <p> {item.pagamento}</p></div>
                    </div>
                    <div className='div-cl2-infos01'>
                        <div className='div-informacoesda-cl2' >
                            Envio:
                            <span> até {item.dataDoPedido.substr(0, 10)} </span>
                        </div>
                    </div>

                    <div className='div-cl3-infos01'>
                        <div className='div-informacoesda-cl3'>
                            Endereço:
                            <span> {item.Endereço} {item.NumeroEndereço} - {item.Cidade} ,
                                {item.Cep}

                            </span>
                        </div>
                    </div>

                    <div className='div-cl4-infos01'>
                        <div className='div-informacoesda-cl4'>Valor do item: <p>R$ {item.valorProduto}</p></div>
                        <div className='div-informacoesda-cl4'>Total geral: <p>R$ {item.totalItem}</p></div>
                    </div>
                </div>
            </div>

            <div className='InfosDetalhes-pedido'>
                <div className='faixaPreta-detalhesPed'>
                    <div className='faixaPreta-InformacoesDetalhes-cl1'>
                        Pedido Realizado
                        <span>{item.dataDoPedido.substr(0, 10)} </span>
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
                            <div className='infoProd-Descrições-div1'>
                                <h3>{item.nomeProduto}</h3>
                                <p>{item.marcaProduto}</p>
                            </div>
                            <div>
                                <div className='infoProd-desc' >Cor:
                                    <div className='cor' style={{ backgroundColor: item.corProduto }}>
                                    </div>
                                </div>

                                <div className='infoProd-desc' >Tamanho: <span>{item.tamanho}</span></div>
                                <div className='infoProd-desc' >Valor unitario: <span>{item.valorProduto}</span></div>
                                <div className='infoProd-desc' >Quantidade: <span> {item.qtdProduto}</span></div>
                            </div>
                        </div>
                    </div>

                    <div className='infoPed-feedback'>
                        <div className='infoPed-iconsFluxo'>

                        </div>

                        <div className='infoPed-ConfirmaçãoPed'>
                            <button onClick={() => alterarStatus(item.idPedido,item.nomeProduto)} >Recebido?</button>
                        </div>
                    </div>

                </div>

            </div>

        </main>
                    )}




        </section>
        
    )
}