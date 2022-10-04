import './index.scss'

import Cabecalho from '../../../components/cabecalhoadm/index'
import LogoAdd from '../../../assets/image/logo-mais.svg'


import { toast } from 'react-toastify';

import { ListarMarca } from '../../../api/marcaAPI'
import { ListarTamanho } from '../../../api/tamanhoAPI'
import { ListarModelo } from '../../../api/modeloAPI'
import { listarCategoria } from '../../../api/categoriaAPI'
import { buscarImagem, enviarImagemProduto, inserirProduto } from '../../../api/produtoAPI'

import { useEffect, useState } from 'react'



export default function CadastroProduto() {
    const [nome, setNome] = useState();
    const [complementoProduto, setComplementoProduto] = useState();
    const [preco, setPreco] = useState(0);
    const [composicao, setComposicao] = useState();
    const [detalhes, setDetalhes] = useState();
    const [juros, setJuros] = useState(0);
    const [parcela, setParcela] = useState(0);
    const [cor, setCor] = useState();

    const [idCategoria, setIdCategoria] = useState();
    const [categoria, setCategoria] = useState([]);

    const [idMarca, setIdMarca] = useState();
    const [marca, setMarca] = useState([]);

    const [idModelo, setIdModelo] = useState();
    const [modelo, setModelo] = useState([]);

    const [idTamanho, setIdTamanho] = useState();
    const [tamanho, setTamanho] = useState([]);

    const [imagem, setImagem] = useState();
    const [imagem2, setImagem2] = useState();

    const [catSelecionadas, setCatSelecionadas] = useState([]);
    const [modSelecionadas, setModSelecionadas] = useState([]);
    const [tamSelecionadas, setTamSelecionadas] = useState([]);

    async function carregarTamanho() {
        const r = await ListarTamanho();
        setTamanho(r);
    }

    async function carregarModelo() {
        const r = await ListarModelo();
        setModelo(r);
    }

    async function carregarCategoria() {
        const r = await listarCategoria();
        setCategoria(r);
    }

    async function carregarMarca() {
        const r = await ListarMarca();
        setMarca(r);
    }


    function buscarNomeTamanho(id) {
        const cat = tamanho.find(item => item.id == id);
        return cat.tamanho;
    }

    function adicionarTamanho() {
        if (!tamSelecionadas.find(item => item == idTamanho)) {
            const tamanhos = [...tamSelecionadas, idTamanho];
            setTamSelecionadas(tamanhos);
        }
    }

    function buscarNomeModelo(id) {
        const cat = modelo.find(item => item.id == id);
        return cat.modelo;
    }

    function adicionarModelo() {
        if (!modSelecionadas.find(item => item == idModelo)) {
            const modelos = [...modSelecionadas, idModelo];
            setModSelecionadas(modelos);
        }
    }

    function buscarNomeCategoria(id) {
        const cat = categoria.find(item => item.id == id);
        return cat.categoria;
    }

    function adicionarCategoria() {
        if (!catSelecionadas.find(item => item == idCategoria)) {
            const categorias = [...catSelecionadas, idCategoria];
            setCatSelecionadas(categorias);
            console.log(categorias)
        }
    }

    function mostrarImagem() {
        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }
        else {
            return buscarImagem(imagem)
        }
    }

    function escolherImagem(tagId) {
        document.getElementById(tagId).click();
    }

    async function salvarProduto() {
        try {
            const novoProduto = await inserirProduto(nome, complementoProduto, preco, composicao, detalhes, juros, parcela, cor, tamSelecionadas, catSelecionadas);
            alert(novoProduto.id);

            toast.dark(' ✔️ Produto cadastrado com sucesso!');


            const r = await enviarImagemProduto(novoProduto.id, imagem);

        }
        catch (err) {
            toast.dark(err);
            console.log(err)
        }
    }


    useEffect(() => {
        carregarMarca();
        carregarTamanho();
        carregarModelo();
        carregarCategoria();
    }, [])

    return (
        <main className='cadastro'>
            <Cabecalho />


            <h1 className='text-1'> Cadastro </h1>


            <div className='cadastro-sections'>


                <section className='cadastro-section-1'>



                    <h2 className='text-2'> Adicionar foto(s) </h2>


                    <div className='insert-img-agrupamento'>
                        <div className='insert-img-agrupamento-div1-1' onClick={() => escolherImagem('foto')}>

                            <input className='insert-img-agrupamento-input' type='file' id='foto' onChange={e => setImagem(e.target.files[0])} />
                            {imagem &&

                                <img className='foto' src={mostrarImagem(imagem)} alt='' />
                            }
                        </div>


                        <div className='insert-img-1'>
                            <input className='img' type='file' id='foto2' />
                            <input className='img' type='file' id='foto3' />
                            <input className='img' type='file' id='foto4' />
                        </div>

                    </div>



                    <div className='informacoes'>

                        <p className='comp'> Composição do Produto </p>

                        <input className='text' value={composicao} onChange={e => setComposicao(e.target.value)} />

                    </div>


                    <div className='detalhes'>

                        <textarea placeholder='Detalhes do Produto' cols="25" rows="5" onChange={e => setDetalhes(e.target.value)} />


                    </div>




                    <button onClick={salvarProduto} className='cadastro-section2-button'> Salvar </button>




                </section>










                <section className='cadastro-section-2'>
                    <input className='cadastro-section-2-input1' type='text' placeholder='Nome do produto' onChange={e => setNome(e.target.value)} />
                    <input className='cadastro-section-2-input2' type='text' placeholder='Complemento do produto' onChange={e => setComplementoProduto(e.target.value)} />
                    <input className='cadastro-section-2-input3' type='text' placeholder='Valor (R$)' onChange={e => setPreco(e.target.value)} />

                    <div className='cadastro-section2-div1'>
                        <div className='cadastro-section2-div1-1'>
                            <p className='cadastro-section2-div1-1-p'> Parcela(s) </p>
                            <input className='cadastro-section2-div1-input' type='text' placeholder='0' onChange={e => setParcela(e.target.value)} />
                        </div>

                        <div className='cadastro-section2-div2'>
                            <p className='cadastro-section2-div2-p'> Juros </p>
                            <input className='cadastro-section2-div2-input' type='text' placeholder='0' onChange={e => setJuros(e.target.value)} />
                        </div>
                    </div>

                    <div className='cadastro-section2-div3'>
                        <div className='cadastro-section2-div3-1'> <p> Tamanho(s)</p> <img onClick={adicionarTamanho} className='cadastro-section2-div3-1-img' src={LogoAdd} alt='' /> </div>

                        <select className='cadastro-section2-div3-select' value={idTamanho} onChange={e => setIdTamanho(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>
                            {tamanho.map(item =>
                                <option className='cadastro-section2-div3-select-option' value={item.id}> {item.tamanho} </option>
                            )}
                        </select>

                        <div className='aa'><label></label>
                            <div className='tam-conteiner'>
                                {tamSelecionadas.map(id =>
                                    <div className='tam-selecionada'>
                                        {buscarNomeTamanho(id)}
                                    </div>
                                )}
                            </div></div>
                    </div>

                    <div className='cadastro-section2-div4'>
                        <p> Cor em destaque </p>
                        <input className='cadastro-section2-div4-color' type='color' onChange={e => setCor(e.target.value)} />
                    </div>

                    <div className='cadastro-section2-div5'>
                        <div className='cadastro-section2-div5-1'> <p> Modelo </p> <img onClick={adicionarModelo} className='cadastro-section2-div5-1-img' src={LogoAdd} alt='' /> </div>
                        <select value={idModelo} onChange={e => setIdModelo(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>

                            {modelo.map(item =>
                                <option value={item.id}> {item.modelo} </option>
                            )}
                        </select>

                        <div><label></label>
                            <div className='mod-conteiner'>
                                {modSelecionadas.map(id =>
                                    <div className='mod-selecionada'>
                                        {buscarNomeModelo(id)}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='cadastro-section2-div6'>
                        <div className='cadastro-section2-div6-1'> <p> Categoria </p> <img onClick={adicionarCategoria} className='cadastro-section2-div6-1-img' src={LogoAdd} alt='' /> </div>
                        <select className='cadastro-categoria-masculino' value={idCategoria} onChange={e => setIdCategoria(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>

                            {categoria.map(item =>
                                <option value={item.id}> {item.categoria} </option>
                            )}
                        </select>

                        <div><label></label>
                            <div className='cat-conteiner'>
                                {catSelecionadas.map(id =>
                                    <div className='cat-selecionada'>
                                        {buscarNomeCategoria(id)}
                                    </div>
                                )}
                            </div></div>
                    </div>

                    <div className='marcas'>
                        <p className='marcas-p'> Marca </p>
                        <select className='marca-select' value={idMarca} onChange={e => setIdMarca(e.target.value)} >
                            <option selected disabled hidden> Selecione </option>
                            {marca.map(item =>
                                <option value={item.id}> {item.marca} </option>
                            )}
                        </select>
                    </div>




                </section>

            </div>
        </main>

    );
}