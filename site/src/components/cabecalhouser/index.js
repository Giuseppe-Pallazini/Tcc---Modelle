import './index.scss'
import '../../assets/common/index.scss'
import Imagem1 from '../../assets/image/logo_transparent-white.png'
import Imagem2 from '../../assets/image/logo-lupa.png'
import Imagem3 from '../../assets/image/bolsa-lista-desejo.png'
import Imagem4 from '../../assets/image/carrinho.svg'
import Imagem5 from '../../assets/image/user.png'
import ImagemSair from '../../assets/image/logo-sair.png'
import {Navigate, useNavigate} from 'react-router-dom'
import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { buscarProdutoPorId } from '../../api/produtoAPI'

export default function Index(){
    const [itens, setItens] = useState([]);

    const navigate = useNavigate();

    async function carregarCarrinho() {
        let carrinho = storage('carrinho')
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

    function qtdItens() {
        return itens.length
    }

    function abrirNovidades(){
        navigate('/user/menuNovidades');
    }

    function abrirFeminino(){
        navigate('/user/menuFeminino');
    }

    function abrirMasculino(){
        navigate('/user/menuMasculino');
    }

    function abrirCarrinho(){
        navigate('/user/carrinho2');
    }

    function abrirLanding(){
        navigate('/');
    }

    function linkLogin() {
        navigate('/login')
    }


    function sair(){
        if(storage('usuario-logado')){
        storage.remove('usuario-logado')
        storage('carrinho', []);
        toast.dark("Conta deslogada com Sucesso")
        navigate('/')
        }
        if(storage('admin-logado')){
            storage.remove('admin-logado')
            storage('carrinho', []);
            toast.dark("Conta deslogada com Sucesso")
            navigate('/')
            }
        else if(!storage('usuario-logado')){
            toast.dark("Você não está logado")
        }
    }

    
    useEffect(() => {
        carregarCarrinho()
        qtdItens()
    },[])

    return(
        <main>
            <nav className='cab-user'>
                <div className='cab-user-txt'>
                    <h1 className='cab-user-txt-1' onClick={abrirLanding}> M o d e l l e </h1>
                </div>

                <div className='cab-user-topicos'>
                    <div className='cab-user-logo'>
                        <img src={Imagem1} alt=''/>
                    </div>

                    <div className='cab-user-divisoria'>
                        <hr/>
                    </div>
                    
                    <div className='cab-topic'>
                        <p onClick={abrirNovidades} className='cab-topic-nov'> 
                            Novidades
                        </p>

                        <p onClick={abrirFeminino} className='cab-topic-mul' >
                            Mulher
                        </p>

                        <p onClick={abrirMasculino} className='cab-topic-hom'>
                            Homem
                        </p>
                    </div>
                </div>

                <div className='cab-menu'>

                    <div className='cab-lista'>                        
                        <p className='cab-user-lista'>Lista de desejos</p>
                        <img className='cab-user-lista-img' src={Imagem3} alt=''/>
                    </div>

                    <div className='cab-carrinho' >
                        <img onClick={abrirCarrinho} className='cab-user-carrinho' src={Imagem4} alt=''/>
                        <div className='cab-user-carrinho-div'>
                            <span className='cab-user-carrinho-num'> {qtdItens()} </span>
                        </div>

                    </div>

                    <div className='cab-user-1' >
                        <img onClick={linkLogin} className='cab-user-img' src={Imagem5} alt='' />
                    </div>

                    <div onClick={sair} className='div-iconeSair' >
                        <img src={ImagemSair} alt='logo-sair' className='icone-sair' />
                    </div>
                </div>
            </nav>
        </main>
    )
}   