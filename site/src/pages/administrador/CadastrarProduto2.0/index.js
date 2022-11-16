import './index.scss'

import Cabecalho from '../../../components/cabecalhoadm/index'
import LogoAdd from '../../../assets/image/logo-mais.svg'


import { toast } from 'react-toastify';

import { ListarMarca } from '../../../api/marcaAPI'
import { ListarTamanho } from '../../../api/tamanhoAPI'
import { ListarModelo } from '../../../api/modeloAPI'
import { listarCategoria } from '../../../api/categoriaAPI'
import { alterarProduto, buscarImagem, buscarProdutoPorId, inserirProduto, salvarImagem } from '../../../api/produtoAPI'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../../api/config';

import storage from 'local-storage';

export default function CadastroProduto() {
    const [idProduto, setIdProduto] = useState();
    const [nome, setNome] = useState();
    const [complementoProduto, setComplementoProduto] = useState();
    const [preco, setPreco] = useState();
    const [composicao, setComposicao] = useState();
    const [detalhes, setDetalhes] = useState();
    const [juros, setJuros] = useState();
    const [parcela, setParcela] = useState();
    const [disponivel, setDisponivel] = useState();
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
    const [imagem3, setImagem3] = useState();
    const [imagem4, setImagem4] = useState();

    const [tamSelecionadas, setTamSelecionadas] = useState([]);

    const { id } = useParams();

    const navigate = useNavigate();

    async function carregarProdutos(){
        if (!id) return;


        const r = await buscarProdutoPorId(id);
        
        setIdProduto(r.info.id);
        setNome(r.info.produto);
        setComplementoProduto(r.info.complemento);
        setPreco(r.info.preco.toString());
        setComposicao(r.info.composicao);
        setDetalhes(r.info.detalhes);
        setJuros(r.info.juros);
        setParcela(r.info.parcela);
        setDisponivel(r.info.disponivel);
        setCor(r.info.cor);
        setIdMarca(r.info.marca);
        setIdCategoria(r.info.categoria);
        setIdModelo(r.info.modelo)
        setTamSelecionadas(r.tamanho)

        if (r.imagens.length > 0) {
            setImagem(r.imagens[0]);
        }

        if (r.imagens.length > 1) {
            setImagem2(r.imagens[1]);
        }

        if (r.imagens.length > 2) {
            setImagem3(r.imagens[2]);
        }

        if (r.imagens.length > 3) {
            setImagem4(r.imagens[3]);
        }
    }



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
        console.log(cat)
        return cat.tamanho;
    }

    function adicionarTamanho() {
        if (!idTamanho) return;
        
        if (!tamSelecionadas.find(item => item == idTamanho)) {
            const tamanhos = [...tamSelecionadas, idTamanho];
            setTamSelecionadas(tamanhos);
        }
    }

    function removerCategoria(id) {
        const x = tamSelecionadas.filter(item => item != id);
        setTamSelecionadas(x);
    }

    function adicionarTamanho() {
        if (!idTamanho) return;
        
        if (!tamSelecionadas.find(item => item == idTamanho)) {
            const tamanhos = [...tamSelecionadas, idTamanho];
            setTamSelecionadas(tamanhos);
        }
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

    function escolherImagem(tagId) {
        document.getElementById(tagId).click();
    }

    async function salvarProduto() {
        try {
            const precoProduto = preco.replace(',', '.');
            if(!id){
            console.log(precoProduto);
            const r = await inserirProduto(nome, complementoProduto, precoProduto, composicao, detalhes, juros, parcela, disponivel, cor, idMarca, idModelo, idCategoria, tamSelecionadas);
            await salvarImagem(r.id, imagem, imagem2, imagem3, imagem4);

            alert(r.id);

            toast.dark(' ✔️ Produto cadastrado com sucesso!');
            }

            else{
                await alterarProduto(id, nome, complementoProduto, precoProduto, composicao, detalhes, juros, parcela, disponivel, cor, idMarca, idModelo, idCategoria, tamSelecionadas);
                await salvarImagem(id, imagem, imagem2, imagem3, imagem4);
    
                toast.dark(' ✔️ Produto alterado com sucesso!');
            }



        }
        catch (err) {
            toast.error(err.response.data.erro);
            console.log(err)
        }
    }

    useEffect(() => {
        if (!storage('admin-logado')) {
            navigate('/login')
        }
        carregarMarca();
        carregarTamanho();
        carregarModelo();
        carregarCategoria();
        carregarProdutos();
    }, [])

    return (
        
        <main className='cadastro'>
            <Cabecalho />


            <h1 className='text-1'> {id ? 'Alterar Produto' : 'Cadastro'}</h1>


            <div className='cadastro-sections'>


                <section className='cadastro-section-1'>


                    <h2 className='text-2'> {id ? 'Alterar foto(s)' : 'Adicionar foto(s)'} </h2>


                    <div className='insert-img-agrupamento'>
                        <div className='insert-img-agrupamento-div1-1' onClick={() => escolherImagem('imagem')}>

                            <input type='file' id='imagem' onChange={e => setImagem(e.target.files[0])} />
                            {imagem &&

                                <img className='foto' src={mostrarImagem(imagem)} alt='' />
                            }
                        </div>


                        <div className='insert-img-1'>
                            <div className='img-2' onClick={() => escolherImagem('imagem2')}>
                                <input type='file' id='imagem2' onChange={e => setImagem2(e.target.files[0])} />
                                {imagem2 &&
                                    <img className='foto2' src={mostrarImagem(imagem2)} alt='' />
                                }
                            </div>

                            <div className='img-3' onClick={() => escolherImagem('imagem3')}>
                                <input type='file' id='imagem3' onChange={e => setImagem3(e.target.files[0])} />
                                {imagem3 &&
                                    <img className='foto3' src={mostrarImagem(imagem3)} alt='' />
                                }
                            </div>

                            <div className='img-4' onClick={() => escolherImagem('imagem4')}>
                                <input type='file' id='imagem4' onChange={e => setImagem4(e.target.files[0])} />
                                {imagem4 &&

                                    <img className='foto4' src={mostrarImagem(imagem4)} alt='' />
                                }
                            </div>


                        </div>

                    </div>


                    <div className='informacoes'>

                        <p className='comp'> Composição do Produto </p>

                        <input className='text' value={composicao} onChange={e => setComposicao(e.target.value)} />

                    </div>


                    <div className='detalhes'>

                        <textarea placeholder='Detalhes do Produto' cols="25" rows="5" value={detalhes} onChange={e => setDetalhes(e.target.value)} />

                    </div>

                    <button onClick={salvarProduto} className='cadastro-section2-button'> Salvar </button>
                    

                </section>

                <section className='cadastro-section-2'>
                    <input className='cadastro-section-2-input1' type='text' placeholder='Nome do produto' value={nome} onChange={e => setNome(e.target.value)} />
                    <input className='cadastro-section-2-input2' type='text' placeholder='Complemento do produto' value={complementoProduto}  onChange={e => setComplementoProduto(e.target.value)} />
                    <input className='cadastro-section-2-input3' type='number' placeholder='Valor (R$)' value={preco} onChange={e => setPreco(e.target.value)} />

                    


                    <div className='cadastro-section2-div1'>
                        <div className='cadastro-section2-div1-1'>
                            <p className='cadastro-section2-div1-1-p'> Parcela(s) </p>
                            <input className='cadastro-section2-div1-input' type='text' placeholder='0' value={parcela} maxLength='2' onChange={e => setParcela(e.target.value)} />
                        </div>

                        <div className='cadastro-section2-div2'>
                            <p className='cadastro-section2-div2-p'> Juros </p>
                            <input className='cadastro-section2-div2-input' type='text' placeholder='%' maxLength='2' value={juros} onChange={e => setJuros(e.target.value)} />
                        </div>


                        <div className='cadastro-section2-div3'>
                            <p> Disponivel</p>
                            <input className='cadastro-section2-div3-input' type='text' placeholder='0' value={disponivel} onChange={e => setDisponivel(e.target.value)} ></input>
                        </div>
                    </div>

                    <div className='cadastro-section2-div3'>
                        <div className='cadastro-section2-div3-1'> <p> Tamanho(s) </p> <img onClick={adicionarTamanho} className='cadastro-section2-div3-1-img' src={LogoAdd} alt='' /> </div>

                        <select className='cadastro-section2-div3-select' value={idTamanho} onChange={e => setIdTamanho(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>
                            {tamanho.map(item =>
                                <option className='cadastro-section2-div3-select-option' value={item.id}> {item.tamanho} </option>
                            )}
                        </select>

                        <div className='aa'><label></label>
                            <div className='tam-conteiner'>
                                {tamSelecionadas.map(id =>
                                    <div className='tam-selecionada' onClick={() => removerCategoria(id)} >
                                        {buscarNomeTamanho(id)}
                                    </div>
                                )}
                            </div></div>
                    </div>

                    <div className='cadastro-section2-div4'>
                        <p> Cor em destaque </p>
                        <input className='cadastro-section2-div4-color' type='color' value={cor} onChange={e => setCor(e.target.value)} />
                    </div>

                    <div className='cadastro-section2-div5'>
                        <div className='cadastro-section2-div5-1'> <p> Modelo </p> </div>
                        <select value={idModelo} onChange={e => setIdModelo(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>

                            {modelo.map(item =>
                                <option value={item.id}> {item.modelo} </option>
                            )}
                        </select>

                        <div><label></label>

                        </div>
                    </div>

                    <div className='cadastro-section2-div6'>
                        <div className='cadastro-section2-div6-1'> <p> Categoria </p> </div>
                        <select className='cadastro-categoria-masculino' value={idCategoria} onChange={e => setIdCategoria(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>

                            {categoria.map(item =>
                                <option value={item.id}> {item.categoria} </option>
                            )}
                        </select>

                        <div><label></label>
                            </div>
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