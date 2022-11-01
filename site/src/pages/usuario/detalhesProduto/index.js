import { useParams } from 'react-router-dom'
import storage from 'local-storage'
import Cabecalho from '../../../components/cabecalhouser'
import CardUsuario from '../../../components/cardProdutoUsuario'

import { toast } from 'react-toastify';

import './index.scss';
import '../../../assets/common/index.scss'
import { useEffect, useState } from 'react'
import { buscarProdutoPorIdUsuario } from '../../../api/produtoAPI';
import { API_URL } from '../../../api/config';

export default function Index() {
    const [produto, setProduto] = useState({ info: {}, tamanho: [], imagens: [] });
    const [imagemPrincipal, setImagemPrincipal] = useState(0);

    const { id } = useParams();

    async function carregarPagina() {
        const r = await buscarProdutoPorIdUsuario(id);
        console.log(r);
        setProduto(r)
    }

    useEffect(() => {
        carregarPagina();
    }, [])

    function exibirImagemPrincipal() {
        if (produto.imagens.length > 0) {
            return API_URL + '/' + produto.imagens[imagemPrincipal]
        }
    }

    function exibirImagemProdutos(imagem) {
        return API_URL + '/' + imagem;
    }

    function adicionarCarrinho() {
        let carrinho = [];
        if (storage('carrinho')) {
            carrinho = storage('carrinho')
        }

        if (!carrinho.find(item => item.id === id)) {
            carrinho.push({
                id: id,
                qtd: 1
            })
            storage('carrinho', carrinho)
            toast.dark("🛒 Item Adicionado ao Carrinho")
        }
    }

    function formatarPreco(preco) {
        let a = preco.toFixed(2);
        return a
    }

    // function buscarNomeTamanho(id) {
    //     const cat = produto.tamanho.find(item => item.id == id);
    //     return cat.tamanho;
    // }


    return (
        <main className='main-detalhes'>
            <Cabecalho />
            <div>

                <div className='div-detalhes'>
                    <div className='detalhes-imagens' >
                        <img className='imagem-principal' src={exibirImagemPrincipal()} alt='' />
                        <div>

                            {produto.imagens.map((item, pos) =>
                                <img className='imagens-produto' src={exibirImagemProdutos(item)} onClick={() => setImagemPrincipal(pos)} alt="" />
                            )}
                        </div>
                    </div>

                    <div className='detalhes-info'>
                        <h1 className='detalhes-info-produto' >
                            {produto.info.produto}
                        </h1>

                        <p className='detalhes-info-complemento' >
                            {produto.info.complemento}
                        </p>
                        <h1 className='detalhes-info-preco' >
                            R${formatarPreco(produto.info.preco * 1)}
                        </h1>
                        <h1>
                        </h1>

                        <div>
                            <p>
                                {produto.info.juros}x de R$ {formatarPreco(produto.info.preco / produto.info.juros)} sem juros
                            </p>
                        </div>

                        <div className='detalhes-info-tamanho'>
                            {produto.tamanho.map(item =>
                                <div className='detalhes-info-tamanhos-icon'>
                                    <p className='detalhes-info-tamanhos-txt' >{item}</p>
                                </div>
                            )}
                        </div>

                        <section className='detalhes-cor' style={{ backgroundColor: produto.info.cor }} >
                        </section>

                        <div className='detalhes-bt' >
                            <button className='detalhes-add-carrinho' onClick={adicionarCarrinho} >Adicionar ao Carrinho</button>
                            <button className='detalhes-comprar' >Comprar</button>
                        </div>
                    </div>

                </div>


                <div className='detalhes-info-composicao'>
                    <p className='detalhes-info-comp'>Composição</p>

                    <p className='detalhes-info-comp-1'>{produto.info.composicao}</p>
                </div>

                <div className='detalhes-info-detalhes'>
                    <p className='detalhes-info-detalhes-1'>{produto.info.detalhes}</p>
                </div>

                <div className='detalhes-divisoria' >
                    <hr />
                </div>

                <div className='detalhes-recomendados' >
                    <h1 className='detalhes-recomendos-txt' > Recomendados</h1>

                    <div>

                        <CardUsuario />

                    </div>
                </div>
            </div>
        </main>
    );
}