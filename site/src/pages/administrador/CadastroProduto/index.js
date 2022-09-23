import './index.scss'
import Cabecalho from '../../../components/cabecalhoadm/index'
import ImagemX from '../../../assets/image/logo-x-input.svg'
import ImagemCerto from '../../../assets/image/logo-certo-input.svg'
import EscolherImg from '../../../assets/image/escolher-imagem.svg'
import InputMulticolor from '../../../assets/image/logo-multicores.svg'
import LogoAddCor from '../../../assets/image/logo-mais.svg'

import { ListarMarca } from '../../../api/marcaAPI'
import { ListarTamanho} from '../../../api/tamanhoAPI'
import { ListarModelo } from '../../../api/modeloAPI'
import { listarCategoria } from '../../../api/categoriaAPI'
import { buscarImagem } from '../../../api/produtoAPI'

import { useEffect, useState } from 'react'

export default function CadastroProduto(){
    const [idMarca, setIdMarca] = useState();
    const [marca, setMarca] = useState([]);

    const [idTamanho, setIdTamanho] = useState();
    const [tamanho, setTamanho] = useState([]);

    const [idModelo, setIdModelo] = useState();
    const [modelo, setModelo] = useState([]);

    const [idCategoria, setIdCategoria] = useState();
    const [categoria, setCategoria] = useState([]);

    const [imagem, setImagem] = useState();

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

    function escolherImagem() {
        document.getElementById('foto').click();
    }

    function mostrarImagem() {
        if (typeof (imagem) == 'object'){
            return URL.createObjectURL(imagem);
        }
        else {
            return buscarImagem(imagem)
        }
    }


    useEffect(() => {
        carregarMarca();
        carregarTamanho();
        carregarModelo();
        carregarCategoria();
    }, [])

    return(
        <main className='main-cadastro'>
            < Cabecalho />
            <div className='titulo-cadastro'>
                <h1 className='cadastro-h1-titulo'> Cadastro </h1>
            </div>
            
            <div className='div-cadastro-column-01'>
            <div className='div-dashboard-cadastro-pricipal'>
                <div className='div-cadastro-titulo-addfoto'>
                    <p> Adicionar foto(s) </p>
                    <img src={ImagemX} alt='logo' /> 
                    <img src={ImagemCerto} alt='logo'/>                     
                </div>
                
                <div className='div-dashboard-cadastro-inputs'>
                    <div className='cadastro-input-img-1' onClick={escolherImagem}>
                        <input type='file' id='foto' onChange={e => setImagem(e.target.files[0])} />
                            {imagem &&
                            <img className='foto' src={mostrarImagem(imagem)} alt='' />
                            }
                    </div>
                </div>

            </div>
            </div>

            <div className='div-dashboard-cadastro-composição'>
                <textarea type='text' cols="30" rows="5" maxlength="108" className='cadastro-input-composicao' placeholder='Composição do produto ' />
                <hr className='hr' />
                <hr className='hr-1' />
                <hr className='hr-2' />
                <hr className='hr-3' />
            </div>

            <div className='div-dashboard-cadastro-detalhes'>
                <input type='text' className='cadastro-input-detalhes' placeholder='Detalhes do produto' />
                <input type='text' className='cadastro-input-detalhes-2'  />
                <input type='text' className='cadastro-input-detalhes-3'  />
            </div>

            <div className='div-dashboard-cadastro-marca' >
                <div className='cadastro-titulo-marcas'>
                    <p> Marcas(s)</p>
                    <select value={idMarca} onChange={e => setIdMarca(e.target.value)} >              
                        <option selected disabled hidden>Selecione</option>
                            {marca.map(item =>
                                <option value={item.id}> {item.marca} </option>
                            )}
                    </select>
                </div>


                <p className='cadastro-marcas-apenasuma'> * Apenas uma marca </p>
            </div> 

 
            <div className='div-cadastro-column-02'>

                <div className='cadastro-cl2-camposobrigatorios'>
                    <p> * Campos obrigatorios </p>
                </div>

                <div>
                    <input type='text' className='cadastro-cl2-nomeProduto' placeholder='Nome do produto' />
                    <img src={ImagemX} alt='logo' className='logo-x-produto' /> 
                    <img src={ImagemCerto} alt='logo' className='logo-certo-produto' />  
                </div>

                
                <div>
                    <input type='text' className='cadastro-cl2-complementoProduto' placeholder='Complemento produto' />
                    <img src={ImagemX} alt='logo' className='logo-x-complemento' /> 
                    <img src={ImagemCerto} alt='logo' className='logo-certo-complemento' />
                </div>
                
                <div className='cadastro-div-valorProd'>
                    <input type='text' className='cadastro-cl2-valor' placeholder='Valor(R$)' />
                    <img src={ImagemX} alt='logo' className='logo-x-valor' /> 
                    <img src={ImagemCerto} alt='logo' className='logo-certo-valor' />  
                </div>
            </div>


            <div>
                <div>
                    <p className='cadastro-p-parcelas'> Parcela(s)</p>
                    <input type='text' placeholder='0' className='cadastro-input-parcelas' />
                </div>


                <div>
                    <p className='cadastro-p-juros'> Juros</p>
                    <input type='text' placeholder='0%' className='cadastro-input-juros' />
                </div>
            </div>


            <div className='cadastro-tamanhos'>
                <p className='cadastro-p-tamanhos'> Tamanho(s)</p>
                
                <div className='cadastro-inputs-tamanhos'>
                    <select value={idTamanho} onChange={e => setIdTamanho(e.target.value)} >              
                        <option selected disabled hidden>Selecione</option>
                            {tamanho.map(item =>
                                <option value={item.id}> {item.tamanho} </option>
                            )}
                    </select>
                </div> 
            </div>

            <div className='div-cadastro-cores' >
                <div>
                <p className='cadastro-p-cores'>Cor(es) </p>
                </div>
                <div className='cadastro-cores-input'>
                    <img src={InputMulticolor} alt='logo' className='cadastro-input-multicores' />
                    <input type='checked' className='cadastro-input-cores-exemplo'/>
                    <img src={LogoAddCor} alt='logo' className='cadastro-logo-addCor' />
                </div>
            </div>
            

            <div className='div-cadastro-modelos'>

                <p className='cadastro-p-modelo'> Modelo(s)</p>

                <div classname='cadastro-inputs-modelos'> 
                <select value={idModelo} onChange={e => setIdModelo(e.target.value)} >              
                        <option selected disabled hidden>Selecione</option>
                            {modelo.map(item =>
                                <option value={item.id}> {item.modelo} </option>
                            )}
                    </select>
                </div>
            </div>



            <div className='div-cadastro-categoria'>
                <div>
                    <p className='cadastro-p-categoria'> Categoria(s) </p>
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

            <div className='div-cadastro-btn-salvar'>
                <buttom className='cadastro-btn-salvar'> Salvar </buttom>
            </div>
        </main>

    );
}
