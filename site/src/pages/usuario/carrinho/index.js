import './index.scss';

import Cabecalho from '../../../components/cabecalhouser';
import ProdutoCarrinho from '../../../components/cardProdutoCarrinho/index'
import Rodape from '../../../components/Rodapé'


import CardTotalCarrinho from '../../../components/cardTotalCarrinho'

import '../../../assets/common/index.scss'
import { useEffect, useState } from 'react';
import Storage from 'local-storage'
import { buscarProdutoPorId } from '../../../api/produtoAPI';
import { toast } from 'react-toastify';

export default function Index() {
    const [itens, setItens] = useState([]);
    const [qtdProduto, setQtdProduto] = useState(1);


    function removerItem(id) {
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho', carrinho);
        carregarCarrinho();
    }

    
    async function carregarCarrinho() {
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
            console.log(qtdProduto, item.produto.info.preco)
            total = total + item.produto.info.preco * item.qtd;
        }

        return total.toFixed(2);
    }

    useEffect(() => {
        carregarCarrinho();
    }, [])

    return (

        <main className='main-carrinho'>
            <Cabecalho />

            <section className='carrinho-section'>

                <div className='div-carrinho-cards-produtos'>
                    {itens.map(item =>
                        <ProdutoCarrinho item={item} removerItem={removerItem} />
                    )}

                </div>

                <div>
                    <CardTotalCarrinho calcularTotal={calcularTotal}/>
                </div>

            </section>
            <Rodape />
        </main>
    );
}