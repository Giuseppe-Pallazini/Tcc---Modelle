import './index.scss';
import '../../../assets/common/index.scss'
import { useNavigate } from 'react-router-dom';
import { buscarProdutoPorId, buscarImagem } from '../../../api/produtoAPI';
import { useEffect, useState, useRef } from 'react'
import { IMaskInput } from 'react-imask'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

import CabecalhoUser from '../../../components/cabecalhouser/index.js'
import RodapeUser from '../../../components/Rodapé/index.js'
import LogoCartao from '../../../assets/image/creditcardwithlines_121985.svg'

import Storage from 'local-storage'
import { salvarNovoPedido } from '../../../api/pedidoAPI';

export default function Index() {
    const [itens, setItens] = useState([])

    const [mostrarInfosPag, setMostrarInfosPag] = useState(false)
    const showOrHide = () => setMostrarInfosPag(true)

    const [cupom, setCupom] = useState('')
    const [frete, setFrete] = useState('')
    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState('')
    const [vencimento, setVencimento] = useState('')
    const [cvv, setCvv] = useState('')
    const [tipo, setTipo] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numerocasa, setNumeroCasa] = useState('')
    const [cidade, setCidade] = useState('')
    const [cep, setCep] = useState('')
    const [complemento, setComplemento] = useState('')
    const [parcela, setParcela] = useState('')


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

    async function salvarPedido() {

        let produtos = Storage('carrinho');
        let id = '';
        let pedido = ''
        
        if (Storage('usuario-logado')) {
            id = Storage('usuario-logado').id
            pedido =
        {
            cupom: cupom,
            frete: frete,
            tipoPagamento: "Cartão",
            endereco: endereco,
            numerocasa: numerocasa,
            cidade: cidade,
            cep: cep,
            complemento: complemento,
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
        }

        else if (Storage('admin-logado')) {
            id = Storage('admin-logado').id;
            pedido =
        {
            cupom: cupom,
            frete: frete,
            tipoPagamento: "Cartão",
            endereco: endereco,
            numerocasa: numerocasa,
            cidade: cidade,
            cep: cep,
            complemento: complemento,
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
        }

        const r = await salvarNovoPedido(id, pedido)
        toast.dark('Pedido inserido com sucesso!');
        Storage('carrinho', []);
        navigate('/');
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
                                    <input type='text' className='pagamento-Preench-rua-input' value={endereco} onChange={e => setEndereco(e.target.value)} />
                                </div>

                                <div className='pagamento-Preench-numero'>
                                    <p className='pagamento-Preench-numero-p'>N°</p>
                                    <input type='text' className='pagamento-Preench-numero-input' value={numerocasa} onChange={e => setNumeroCasa(e.target.value)} />
                                </div>
                            </div>
                            <div className='pagamento-PreenchEnd-l2'>
                                <div className='pagamento-div-cidade'>
                                    <p className='pagamento-Preench-cidade-p'>Cidade:</p>
                                    <input type='text' className='pagamento-Preench-cidade-input' value={cidade} onChange={e => setCidade(e.target.value)} />
                                </div>

                                <div className='pagamento-div-cep'>
                                    <p className='pagamento-Preench-cep-p'>CEP:</p>
                                    <IMaskInput mask='00000-000' type='text' className='pagamento-Preench-cep-input' value={cep} onChange={e => setCep(e.target.value)} />
                                </div>
                            </div>

                            <div className='pagamento-PreenchEnd-l3'>
                                <div>
                                    <p className='pagamento-Preench-complem-p'>Complemento:</p>
                                    <input type='text' placeholder='Apt 18' className='pagamento-Preench-comple-input' value={complemento} onChange={e => setComplemento(e.target.value)} />
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
                        <button className='pagamento-button-finalizarPed' onClick={salvarPedido}> Finalizar Compra </button>
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

                            </div>
                            <div onClick={LogoCartao} className='pagamento-formulario-preech' >
                                <div className='pagamento-infoCartaol1'>
                                    <div className='pagamento-infoCartao-nome'>
                                        Nome do Titular <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                                    </div>

                                    <div className='pagamento-infoCartao-Cvv'>
                                        Cvv <input type='text' value={cvv} onChange={e => setCvv(e.target.value)} />
                                    </div>
                                </div>

                                <div className='pagamento-infoCartaol2'>
                                    <div className='pagamento-infoCartao-numero'>
                                        Numero do cartão <IMaskInput mask='0000 0000 0000 0000  ' type='text' value={numero} onChange={e => setNumero(e.target.value)} />
                                    </div>

                                    <div className='cupom'>
                                        Cupom <input type='text' value={cupom} onChange={e => setCupom(e.target.value)} />
                                    </div>

                                    <div className='pagamento-infoCartao-validade'>
                                        Vencimento <input type='text' value={vencimento} onChange={e => setVencimento(e.target.value)} />
                                    </div>
                                </div>

                                <div className='pagamento-infoCartaol3'>
                                    <div className='div-pagamento-tpCartão'>
                                        Tipo do Cartão
                                        <select name='Tipo do cartão' className='pagamento-select-tpCartão' value={tipo} onChange={e => setTipo(e.target.value)}>
                                            <option className='pagamento-option-tpCartão'> Débito </option>
                                            <option className='pagamento-option-tpCartão'> Crédito </option>
                                        </select>
                                    </div>

                                    <div className='div-pagamento-QtdParcelas'>
                                        Parcelas
                                        <select name='Quantidade de parcela' className='pagamento-select-qtdParcela' value={parcela} onChange={e => setParcela(e.target.value)}>
                                            <option className='pagamento-option-qtdParcela'> 1 </option>
                                            <option className='pagamento-option-qtdParcela'> 2</option>
                                            <option className='pagamento-option-qtdParcela'> 3</option>
                                            <option className='pagamento-option-qtdParcela'> 4</option>
                                            <option className='pagamento-option-qtdParcela'> 5</option>
                                            <option className='pagamento-option-qtdParcela'> 6</option>
                                            <option className='pagamento-option-qtdParcela'> 7</option>
                                            <option className='pagamento-option-qtdParcela'> 8</option>
                                            <option className='pagamento-option-qtdParcela'> 9</option>
                                            <option className='pagamento-option-qtdParcela'> 10</option>
                                            <option className='pagamento-option-qtdParcela'> 11</option>
                                            <option className='pagamento-option-qtdParcela'> 12</option>
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