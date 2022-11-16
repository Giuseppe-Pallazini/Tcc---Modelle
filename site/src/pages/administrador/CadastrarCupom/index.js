import './index.scss'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import { IMaskInput } from 'react-imask'
import CabecalhoAdm from '../../../components/cabecalhoadm'
import desc from '../../../assets/image/descontto.svg'
import '../../../assets/common/index.scss'


import { useEffect, useState, useRef } from 'react'
import { toast } from 'react-toastify'
import { inserirCupom } from '../../../api/produtoAPI'




export default function Index() {
    const [codCupom, setCodCupom] = useState();
    const [quantidade, setQuantidade] = useState();
    const [valor, setValor] = useState();

    async function cadastrarCupom(){
        try {
            const novoCupom = await inserirCupom(codCupom, valor, quantidade);
            toast.dark(' ✔️ Cupom cadastrado com secesso!');

        } catch (err) {
            toast.error(err.response.data.erro);
            console.log(err)
        }
    }

    const navigate = useNavigate();

    return (
        <main className='main-cadastroCupom'>
            <CabecalhoAdm />
            <section className='section-cadastroCupom'>


                <div className='info-cup'>
                    <h1> Cadastrar cupom </h1>
                    <img className='image-desconto' src={desc}></img>
                </div>

                <hr className='linha' />

                <div className='inputs'>

                    <div className='cupom'>

                        <span> Código do cupom: </span>
                        <input type='text' value={codCupom} onChange={e => setCodCupom(e.target.value)}/>

                    </div>

                    <div className='quantidade'>

                        <span> Quantidade: </span>
                        <IMaskInput mask='00.00' type='number' value={quantidade} onChange={e => setQuantidade(e.target.value)} />

                    </div>

                    <div className='desconto'>

                        <span> Desconto: </span>
                        <IMaskInput mask='00.00' type='number' value={valor} onChange={e => setValor(e.target.value)} />

                    </div>

                </div>


                <button className='bt-cadastro' onClick={cadastrarCupom} > Cadastrar </button>



            </section>
        </main>
    );
}