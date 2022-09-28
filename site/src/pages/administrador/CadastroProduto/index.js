import './index.scss'
import Cabecalho from '../../../components/cabecalhoadm/index'
import ImagemX from '../../../assets/image/logo-x-input.svg'
import ImagemCerto from '../../../assets/image/logo-certo-input.svg'
import EscolherImg from '../../../assets/image/escolher-imagem.svg'
//import InputMulticolor from '../../../assets/image/logo-multicores.svg'
import LogoAddCor from '../../../assets/image/logo-mais.svg'

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

    const [idMarca, setIdMarca] = useState();
    const [marca, setMarca] = useState([]);

    const [idTamanho, setIdTamanho] = useState();
    const [tamanho, setTamanho] = useState([]);

    const [idModelo, setIdModelo] = useState();
    const [modelo, setModelo] = useState([]);

    const [idCategoria, setIdCategoria] = useState();
    const [categoria, setCategoria] = useState([]);

    const [imagem, setImagem] = useState();
    const [imagem2, setImagem2] = useState();

    const [catSelecionadas, setCatSelecionadas] = useState([]);
    const [modSelecionadas, setModSelecionadas] = useState([]);
    const [tamSelecionadas, setTamSelecionadas] = useState([]);

    async function carregarMarca() {
        const r = await ListarMarca();
        setMarca(r);
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

    ///////////////////////////
    function adicionarCategoria() {
        if (!catSelecionadas.find(item => item == idCategoria)) {
            const categorias = [...catSelecionadas, idCategoria];
            setCatSelecionadas(categorias);
        }
    }

    function buscarNomeCategoria(id) {
        const cat = categoria.find(item => item.id == id);
        return cat.categoria;
    }


    ///////////////////////////
    function adicionarModelo() {
        if (!modSelecionadas.find(item => item == idModelo)) {
            const modelos = [...modSelecionadas, idModelo];
            setModSelecionadas(modelos);
        }
    }

    function buscarNomeModelo(id) {
        const cat = modelo.find(item => item.id == id);
        return cat.modelo;
    }


    ///////////////////////////
    function adicionarTamanho() {
        if (!tamSelecionadas.find(item => item == idTamanho)) {
            const tamanhos = [...tamSelecionadas, idTamanho];
            setTamSelecionadas(tamanhos);
        }
    }

    function buscarNomeTamanho(id) {
        const cat = tamanho.find(item => item.id == id);
        return cat.tamanho;
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
            const novoProduto = await inserirProduto(idTamanho, idModelo, nome, complementoProduto, preco, composicao, detalhes, juros, parcela, cor, idMarca, idCategoria);
            alert(novoProduto.id);
            const r = await enviarImagemProduto(novoProduto.id, imagem);

            toast.dark('Produto cadastrado com sucesso');
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
        <main className='main-cadastro'>
            <Cabecalho />
            <div className='titulo-cadastro'>
                <h1 className='cadastro-h1-titulo'> Cadastro </h1>
            </div>

            <div className='div-cadastro-column-01'>
                <div className='div-dashboard-cadastro-pricipal'>
                    <div className='div-cadastro-titulo-addfoto'>
                        <p> Adicionar foto(s) </p>
                        <img src={ImagemX} alt='logo' />
                        <img src={ImagemCerto} alt='logo' />
                    </div>

                    <div className='div-dashboard-cadastro-inputs'>
                        <div className='cadastro-input-img-1' onClick={() => escolherImagem('foto')}>
                            <input type='file' id='foto' onChange={e => setImagem(e.target.files[0])} />
                            {imagem &&
                                <img className='foto' src={mostrarImagem(imagem)} alt='' />
                            }
                        </div>
                    </div>


                    <div className='div-dashboard-cadastro-inputs'>                            
                        <div className='cadastro-input-img-1' onClick={() => escolherImagem('foto2')}>
                            <input type='file' id='foto2' onChange={e => setImagem2(e.target.files[0])} />
                            {imagem2 &&
                                <img className='foto' src={mostrarImagem(imagem2)} alt='' />
                            }
                        </div>
                    </div>
                </div>


                <div className='div-dashboard-cadastro-composição'>
                    <textarea type='text' cols="27" rows="5" maxLength="108" className='cadastro-input-composicao' placeholder='Composição do produto ' value={composicao} onChange={e => setComposicao(e.target.value)} />
                    <hr className='hr' />

                </div>

                <div className='div-dashboard-cadastro-detalhes'>
                    <input type='text' className='cadastro-input-detalhes' placeholder='Detalhes do produto' value={detalhes} onChange={e => setDetalhes(e.target.value)} />
                    <input type='text' className='cadastro-input-detalhes-2' value={detalhes} onChange={e => setDetalhes(e.target.value)} />
                    <input type='text' className='cadastro-input-detalhes-3' value={detalhes} onChange={e => setDetalhes(e.target.value)} />
                </div>

                <div className='div-dashboard-cadastro-marca' >
                    <div className='cadastro-titulo-marcas'>
                        <p> Marcas(s)</p>
                        <select className='oi' value={idMarca} onChange={e => setIdMarca(e.target.value)} >
                            <option selected disabled hidden> Selecione </option>
                            {marca.map(item =>
                                <option value={item.id}> {item.marca} </option>
                            )}
                        </select>
                    </div>


                    <p className='cadastro-marcas-apenasuma'> * Apenas uma marca </p>
                </div>

            </div>

            <div className='div-cadastro-column-02'>

                <div className='cadastro-cl2-camposobrigatorios'>
                    <p> * Campos obrigatorios </p>
                </div>

                <div>
                    <input type='text' className='cadastro-cl2-nomeProduto' placeholder='Nome do produto' value={nome} onChange={e => setNome(e.target.value)} />
                    <img src={ImagemX} alt='logo' className='logo-x-produto' />
                    <img src={ImagemCerto} alt='logo' className='logo-certo-produto' />
                </div>


                <div>
                    <input type='text' className='cadastro-cl2-complementoProduto' placeholder='Complemento produto' value={complementoProduto} onChange={e => setComplementoProduto(e.target.value)} />
                    <img src={ImagemX} alt='logo' className='logo-x-complemento' />
                    <img src={ImagemCerto} alt='logo' className='logo-certo-complemento' />
                </div>

                <div className='cadastro-div-valorProd'>
                    <input type='text' className='cadastro-cl2-valor' placeholder='Valor(R$)' value={preco} onChange={e => setPreco(e.target.value)} />
                    <img src={ImagemX} alt='logo' className='logo-x-valor' />
                    <img src={ImagemCerto} alt='logo' className='logo-certo-valor' />
                </div>



                <div>
                    <div>
                        <p className='cadastro-p-parcelas'> Parcela(s)</p>
                        <input type='text' placeholder='0' className='cadastro-input-parcelas' value={parcela} onChange={e => setParcela(e.target.value)} />
                    </div>


                    <div>
                        <p className='cadastro-p-juros'> Juros</p>
                        <input type='text' placeholder='0%' className='cadastro-input-juros' value={juros} onChange={e => setJuros(e.target.value)} />
                    </div>
                </div>


                <div className='cadastro-tamanhos'>
                    <p className='cadastro-p-tamanhos'> Tamanho(s)</p>
                    <div className='cadastro-logo-addtamanho-div'>
                        <img src={LogoAddCor} alt='logo' className='cadastro-logo-addtamanho' onClick={adicionarTamanho} /> </div>

                    <div className='cadastro-inputs-tamanhos'>
                        <select value={idTamanho} onChange={e => setIdTamanho(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>
                            {tamanho.map(item =>
                                <option value={item.id}> {item.tamanho} </option>
                            )}
                        </select>
                    </div>

                    <div className='aa'><label></label>
                        <div className='tam-conteiner'>
                            {tamSelecionadas.map(id =>
                                <div className='tam-selecionada'>
                                    {buscarNomeTamanho(id)}
                                </div>
                            )}
                        </div></div>
                </div>

                <div className='div-cadastro-cores' >
                    <div>
                        <p className='cadastro-p-cores'>Cor(es) </p>
                    </div>
                    <div className='cadastro-cores-input'>
                        <input type='color' className='cadastro-input-cores-exemplo' value={cor} onChange={e => setCor(e.target.value)} />

                    </div>
                </div>


                <div className='div-cadastro-modelos'>

                    <p className='cadastro-p-modelo'> Modelo(s)</p>
                    <img src={LogoAddCor} alt='logo' className='cadastro-logo-addMod' onClick={adicionarModelo} />

                    <div classname='cadastro-inputs-modelos'>
                        <select value={idModelo} onChange={e => setIdModelo(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>

                            {modelo.map(item =>
                                <option value={item.id}> {item.modelo} </option>
                            )}
                        </select>
                    </div>

                    <div><label></label>
                        <div className='mod-conteiner'>
                            {modSelecionadas.map(id =>
                                <div className='mod-selecionada'>
                                    {buscarNomeModelo(id)}
                                </div>
                            )}
                        </div></div>
                </div>



                <div className='div-cadastro-categoria'>
                    <div>
                        <p className='cadastro-p-categoria'> Categoria(s) </p>
                        <div className='cadastro-logo-addcategoria-div'> <img src={LogoAddCor} alt='' onClick={adicionarCategoria} className='cadastro-logo-addcategoria' /> </div>
                    </div>

                    <div className='cadastro-categoria-linha'>
                        <select className='cadastro-categoria-masculino' value={idCategoria} onChange={e => setIdCategoria(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>

                            {categoria.map(item =>
                                <option value={item.id}> {item.categoria} </option>
                            )}
                        </select>
                    </div>
                </div>
                <div><label></label>
                    <div className='cat-conteiner'>
                        {catSelecionadas.map(id =>
                            <div className='cat-selecionada'>
                                {buscarNomeCategoria(id)}
                            </div>
                        )}
                    </div></div>

                <div className='div-cadastro-btn-salvar'>
                    <button onClick={salvarProduto} className='cadastro-btn-salvar'> Salvar </button>
                </div>

            </div>


        </main>

    );
}
