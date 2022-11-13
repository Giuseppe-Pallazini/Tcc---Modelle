import './index.scss';
import '../../../assets/common/index.scss'
import { useNavigate } from 'react-router-dom';
import { buscarProdutoPorId, buscarImagem } from '../../../api/produtoAPI';

import CabecalhoUser from '../../../components/cabecalhouser/index.js'
import RodapeUser from '../../../components/Rodapé/index.js'

import LogoCartao from '../../../assets/image/creditcardwithlines_121985.svg'
import LogoPix from '../../../assets/image/icone-pix.png'

import { useEffect, useState, useRef } from 'react'
import { IMaskInput } from 'react-imask'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';


import Storage from 'local-storage'
import { salvarNovoPedido } from '../../../api/pedidoAPI';

export default function Index() {
    const [itens, setItens] = useState([])

    const [cupom, setCupom] = useState('')
    const [frete, setFrete] = useState('')
    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState('')
    const [vencimento, setVencimento] = useState('')
    const [cvv, setCvv] = useState('')
    const [tipo, setTipo] = useState('')
    const [parcela, setParcela] = useState('')

    const [mostrarInfosPag, setMostrarInfosPag] = useState(false)
    const showOrHide = () => setMostrarInfosPag(true)

    const navigate = useNavigate();
    function abrirDetalhes(id) {
        navigate(`/user/destalheProduto/${id}`)
    }

    function dataAtual() {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        return today.toLocaleDateString();

    }

    async function carregarItens() {
        let carrinho = Storage('carrinho')
        console.log(carrinho)
        if (carrinho) {

            let temp = [];

            for (let produto of carrinho) {
                let p = await buscarProdutoPorId(produto.id);
                temp.push({
                    produto: p,
                    qtd: produto.qtd,
                })
            }
            setItens(temp)
        }

    }

    function calcularTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.qtd * item.produto.info.preco;
        }

        return total.toFixed(2);
    }

    function mostrarImagem(imagem) {
        return buscarImagem(imagem)
    }

    async function salvarPedido() {

        let produtos = Storage('carrinho');
        let id = Storage('cliente-logado').id;

        let pedido =
        {
            cupom: cupom,
            frete: frete,
            tipoPagamento: "Cartão",
            cartao:
            {
                nome: nome,
                numero: numero,
                vencimento: vencimento,
                codSeguranca: cvv,
                formaPagamento: tipo,
                parcelas: parcela
            },
            produtos: produtos
        }

        const r = await salvarNovoPedido(id, pedido)
        toast.dark('Pedido inserido com sucesso!');
        Storage('carrinho', []);
        navigate('/');

    }

    useEffect(() => {
        carregarItens();
    }, [])


    return (
        <main className='main-pagamentoPrincipal'>
            <CabecalhoUser />

            <section className='section-pagamento-principal'>

                <section className='section-separar' >
                    <div className='div-pagamento-endereço-infosped'>
                        <div className='div-pagamento-preenchEnd'>
                            <h1 className='pagamento-titulo-endereço'> Endereço </h1>

                            <div className='pagamento-PreenchEnd-l1'>
                                <div>
                                    <p className='pagamento-Preench-rua-p'> Rua: </p>
                                    <input type='text' placeholder='Avenida Paulista' className='pagamento-Preench-rua-input' />
                                </div>

                                <div className='pagamento-Preench-numero'>
                                    <p className='pagamento-Preench-numero-p'>N°</p>
                                    <input type='text' placeholder='000' className='pagamento-Preench-numero-input' />
                                </div>
                            </div>
                            <div className='pagamento-PreenchEnd-l2'>
                                <div className='pagamento-div-cidade'>
                                    <p className='pagamento-Preench-cidade-p'>Cidade:</p>
                                    <input type='text' placeholder='São Paulo' className='pagamento-Preench-cidade-input' />
                                </div>
                                <div>
                                    <p className='pagamento-Preench-bairro-p'>Bairro:</p>
                                    <input type='text' placeholder='Veleiros' className='pagamento-Preench-bairro-input' />
                                </div>
                                <div className='pagamento-div-cep'>
                                    <p className='pagamento-Preench-cep-p'>CEP:</p>
                                    <IMaskInput mask='00000-000' type='text' placeholder='00000-111' className='pagamento-Preench-cep-input' />
                                </div>
                            </div>

                            <div className='pagamento-PreenchEnd-l3'>
                                <div>
                                    <p className='pagamento-Preench-complem-p'>Complemento:</p>
                                    <input type='text' placeholder='Apt 18' className='pagamento-Preench-comple-input' />
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
                                            <img src={mostrarImagem(item.produto.imagens)} alt='imgProd-pagamento' />
                                        </div>
                                        <a onClick={abrirDetalhes} className='pagamento-infosPed-tituloProd'> <b> {item.produto.info.produto} </b> </a>

                                        <div className='pagamento-div-qtdUnid'>
                                            Unidades: <p className='pagamento-p-qtdUnid-prod'> {item.qtd} </p>
                                        </div>

                                        <div className='pagamento-div-datePed'>
                                            Data: <p className='pagamento-p-DtPed'> {dataAtual()} </p>
                                        </div>


                                        <div className='pagamento-div-SubtotalPed'>
                                            Subtotal: <p className='pagamento-p-SubtotalPed'>R$ <span>{item.qtd * item.produto.info.preco}</span></p>
                                        </div>
                           

                                        <div className='pagamento-div-EntregaPed'>
                                            Entrega: <p className='pagamento-p-EntregaPed'>R$ <span>0,00</span> </p>
                                        </div>
                                        <p className='pagamento-p-InfoEntr'>  Entrega de 7 a 20 dias úteis  </p>



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
                        </div>
                        <Link to="/user/seusPedidos" className='pagamento-button-finalizarPed'>Finalizar Compra </Link>
                    </section>
                </section>

                <div className='pagamento-div-botao-proximo'>
                    <button className='pagamento-botao-proximo' onClick={showOrHide}> Proximo </button>
                </div>

                {mostrarInfosPag ?
                    <section className='pagamento-section'>
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
                                        Nome do Titular <input type='text' placeholder='Ex: Giuseppe Pallazini' />
                                    </div>

                                    <div className='pagamento-infoCartao-Cvv'>
                                        Cvv <input type='text' placeholder='Ex: 545' />
                                    </div>
                                </div>

                                <div className='pagamento-infoCartaol2'>
                                    <div className='pagamento-infoCartao-numero'>
                                        Numero do cartão <input type='text' placeholder='Ex: 1111 1111 1111 1111' />
                                    </div>

                                    <div className='pagamento-infoCartao-validade'>
                                        Vaidade <input type='text' placeholder='Ex: 10/10' />
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
                                            <option className='pagamento-option-qtdParcela'> 1x sem juros </option>
                                            <option className='pagamento-option-qtdParcela'> 2x sem juros</option>
                                            <option className='pagamento-option-qtdParcela'> 3x sem juros</option>
                                            <option className='pagamento-option-qtdParcela'> 4x sem juros</option>
                                            <option className='pagamento-option-qtdParcela'> 5x sem juros</option>
                                            <option className='pagamento-option-qtdParcela'> 6x sem juros</option>
                                            <option className='pagamento-option-qtdParcela'> 7x sem juros</option>
                                            <option className='pagamento-option-qtdParcela'> 8x sem juros</option>
                                            <option className='pagamento-option-qtdParcela'> 9x sem juros</option>
                                            <option className='pagamento-option-qtdParcela'> 10x sem juros</option>
                                            <option className='pagamento-option-qtdParcela'> 11x sem juros</option>
                                            <option className='pagamento-option-qtdParcela'> 12x sem juros</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    : null}
            </section>

            <RodapeUser />
        </main>
    );
}