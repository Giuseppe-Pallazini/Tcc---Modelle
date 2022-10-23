import Storage from 'local-storage'
import './index.scss';
import '../../../assets/common/index.scss'
import { useNavigate } from 'react-router-dom';
import { buscarProdutoPorId } from '../../../api/produtoAPI';

import CabecalhoUser from '../../../components/cabecalhouser/index.js'
import RodapeUser from '../../../components/Rodapé/index.js'

import LogoLocalizacao from '../../../assets/image/imagem-localização.png'
import LogoCartao from '../../../assets/image/logo-cartão.png'
import LogoPix from '../../../assets/image/icone-pix.png'
import LogoFinalizado from '../../../assets/image/logo-finalizado.png'
import ImagemProd from '../../../assets/image/camiseta-preta-versace.png'
import LogoSeta from '../../../assets/image/set-tela-pagamentos.png'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    const [itens, setItens] = useState([])

    const [mostrarInfosPag, setMostrarInfosPag] = useState(false)
    const showOrHide = () => setMostrarInfosPag(true)

    const navigate = useNavigate();
    function abrirDetalhes(id){
        navigate(`/user/destalheProduto/${id}`)
    }

    async function carregarItens(){
        let carrinho = Storage('carrinho')
        console.log(carrinho)
        if (carrinho) {

            let temp = [];

            for (let produto of carrinho){
               let p = await buscarProdutoPorId(produto.id);
               temp.push({
                   produto: p,
                   qtd: produto.qtd,
               })
            }
            setItens(temp)
        }
 
    }

    function calcularTotal(){
        let total = 0;
        for(let item of itens){
            total = total + item.qtd * item.produto.info.preco;
        }

        return total;
    }

    useEffect(() => {
        carregarItens();
    }, [])


    return(
       <main className='main-pagamentoPrincipal'>
            <CabecalhoUser />

                 <section className='section-pagamento-principal'>
                    <div className='pagamento-icones-situacoes'>
                        <div className='div-pagamento-icons-situações'>
                            <img src={LogoLocalizacao} alt='logo-localização' className='icon-pagamento-localização' />
                            <img src={LogoSeta} alt='logo-seta'  className='icon-pagamento-seta' />
                            <img src={LogoCartao} alt='logo-cartão'  className='icon-pagamento-cartão'/>
                            <img src={LogoSeta} alt='logo-seta'  className='icon-pagamento-seta'/>
                            <img src={LogoFinalizado} alt='logo-confirmado'  className='icon-pagamento-confirmado'/>
                        </div>
                    </div>
                        
                <section className='section-separar' >
                    <div className='div-pagamento-endereço-infosped'>
                        <div className='div-pagamento-preenchEnd'>
                            <h1 className='pagamento-titulo-endereço'> Endereço </h1>

                            <div className='pagamento-PreenchEnd-l1'>
                                <div>
                                    <p className='pagamento-Preench-rua-p'>Rua:</p>
                                    <input type='text' placeholder='Ex: Avenida Paulista' className='pagamento-Preench-rua-input' />
                                </div>

                                <div className='pagamento-Preench-numero'>
                                    <p className='pagamento-Preench-numero-p'>N°</p>
                                    <input type='text' placeholder='Ex: 124' className='pagamento-Preench-numero-input' />
                                </div>
                            </div>  
                            <div className='pagamento-PreenchEnd-l2'>
                                <div className='pagamento-div-cidade'>
                                    <p className='pagamento-Preench-cidade-p'>Cidade:</p>
                                    <input type='text' placeholder='Ex: São Paulo' className='pagamento-Preench-cidade-input' />
                                </div>
                                <div>
                                    <p className='pagamento-Preench-bairro-p'>Bairro:</p>
                                    <input type='text' placeholder='Ex: Veleiros' className='pagamento-Preench-bairro-input' />
                                </div>
                                <div className='pagamento-div-cep'>
                                    <p className='pagamento-Preench-cep-p'>CEP:</p>
                                    <input type='text' placeholder='Ex: 04545-213' className='pagamento-Preench-cep-input' />
                                </div>
                            </div>

                            <div className='pagamento-PreenchEnd-l3'>
                                <div>
                                <p className='pagamento-Preench-complem-p'>Complemento:</p>
                                    <input type='text' placeholder='Ex: Casa' className='pagamento-Preench-comple-input' />
                                </div>
                            </div>
                        </div>
                    </div>
                <section>
                        <section className='div-pagamento-ped' >
                            {itens.map(item =>
                            <div className='div-pagamento-InfosPed'> 
                                <section>
                                    <div className='pagamento-div-imgProd'>
                                            <img src={ImagemProd} alt='imgProd-pagamento' />
                                    </div>
                                    <a onClick={abrirDetalhes} className='pagamento-infosPed-tituloProd'> {item.produto.info.produto} </a>

                                    <div className='pagamento-div-qtdUnid'>
                                            Unidades: <p className='pagamento-p-qtdUnid-prod'> {item.qtd}</p>
                                    </div>

                                    <div className='pagamento-div-datePed'>
                                            Data: <p className='pagamento-p-DtPed'> 12 / 10 / 2006</p>
                                    </div>


                                    <div className='pagamento-div-SubtotalPed'>
                                                Subtotal: <p className='pagamento-p-SubtotalPed'>R$ <span>{item.qtd * item.produto.info.preco}</span></p>
                                    </div>

                                    <div className='pagamento-div-EntregaPed'>
                                            Entrega: <p className='pagamento-p-EntregaPed'>R$ <span>0,00</span> </p>
                                    </div>
                                    <p className='pagamento-p-InfoEntr'>  Entrega em até 7 dias uteis  </p>



                                    <div className='pagamento-div-CupomPed'>
                                            Cupom: <p className='pagamento-p-cupom'> CHAMB162</p>
                                    </div>
                                </section>
                            </div>
                            )}
                            </section>
                        <div className='pagamento-confirm' >

                            <div className='pagamento-div-TotalPed'>
                                Total: <p className='pagamento-p-EntregaPed'>R$ <span>{calcularTotal()}</span> </p>
                            </div>
                                    
                            <div className='pagamento-div-button'>
                                <button className='pagamento-button-finalizarPed'>Finalizar Compra</button>
                            </div>
                            
                        </div>
                    </section>
                </section>
                                
                    <div className='pagamento-div-botao-proximo'> 
                        <button className='pagamento-botao-proximo' onClick={showOrHide}> Proximo </button>
                    </div>


                { mostrarInfosPag ? 
                    <div>
                    <div className='pagamento-div-titulo-infoPag'>
                        <h1>Pagamento</h1>
                    </div>
                        
                    <div className='pagamento-formulario-pag'>
                        <div className='pagamento-div-icones'> 
                            <div className='div-logo-cartãoPag'>
                                <img src={LogoCartao} alt='logo-catão' />                            
                            </div>
                            <div className='div-logo-PixPag'>
                                <img src={LogoPix} alt='logo-pix' />
                            </div>
                        </div>
                        <div onClick={LogoCartao} className='pagamento-formulario-preech' >
                            <div className='pagamento-infoCartaol1'>
                                <div className='pagamento-infoCartao-nome'>
                                    Nome do Titular <input type='text' placeholder='Ex: Giuseppe Pallazini'/> 
                                </div>

                                <div className='pagamento-infoCartao-Cvv'>
                                    Cvv <input type='text' placeholder='Ex: 545'/> 
                                </div>
                            </div>

                            <div className='pagamento-infoCartaol2'>
                                <div className='pagamento-infoCartao-numero'>
                                    Numero do cartão <input type='text' placeholder='Ex: 1111 1111 1111 1111'/> 
                                </div>

                                <div className='pagamento-infoCartao-validade'>
                                    Vaidade <input type='text' placeholder='Ex: 10/10'/> 
                                </div>
                            </div>

                            <div className='pagamento-infoCartaol3'>
                                <div className='div-pagamento-tpCartão'>
                                    Tipo do Cartão
                                    <select name='Tipo do cartão' className='pagamento-select-tpCartão'>
                                        <option className='pagamento-option-tpCartão'> Débito </option>
                                        <option className='pagamento-option-tpCartão'> Crédito </option>
                                    </select>
                                </div>
                                
                                <div className='div-pagamento-QtdParcelas'>
                                    Parcelas 
                                    <select name='Quantidade de parcela' className='pagamento-select-qtdParcela'>
                                        <option className='pagamento-option-qtdParcela'> 1 </option>
                                        <option className='pagamento-option-qtdParcela'> 2 </option>
                                        <option className='pagamento-option-qtdParcela'> 3 </option>
                                        <option className='pagamento-option-qtdParcela'> 4 </option>
                                        <option className='pagamento-option-qtdParcela'> 5 </option>
                                        <option className='pagamento-option-qtdParcela'> 6 </option>
                                        <option className='pagamento-option-qtdParcela'> 7 </option>
                                        <option className='pagamento-option-qtdParcela'> 8 </option>
                                        <option className='pagamento-option-qtdParcela'> 9 </option>
                                        <option className='pagamento-option-qtdParcela'> 10 </option>
                                        <option className='pagamento-option-qtdParcela'> 11</option>
                                        <option className='pagamento-option-qtdParcela'> 12 </option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                : null }
                 </section>

            <RodapeUser />
        </main> 
    );
}