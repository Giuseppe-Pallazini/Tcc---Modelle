import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';
import ImagemCadastroUsuario from '../../../assets/image/imagem-cadastro-usuario.png'
import LogoModelle from '../../../assets/image/logo-modelle.svg'
import { CadastroUsuario } from '../../../api/usuarioAPI'

import { login } from '../../../api/usuarioAPI.js'

import { Link } from 'react-router-dom'
import './index.scss';
import '../../../assets/common/index.scss'
import { useState } from 'react'
import { IMaskInput } from 'react-imask';
import validator from 'validator';
import storage from 'local-storage';

export default function Index() {
    const [nome, setNome] = useState('');
    const [dtNascimento, setDtNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroSenha, setErroSenha] = useState('')

    const navigate = useNavigate()

    async function cadastrarUsuario() {
        try {
            if (validator.isEmail(email)) {

                if (email != email2) {
                    throw new Error("Erro")
                }

                if (senha != senha2) {
                }

                else if (senha.length < 6) {
                    setErroSenha('Senha de conter no mínimo 6 caracteres')
                }
                
                else {
                const novoUsuario = await CadastroUsuario(nome, dtNascimento, telefone, email, senha);
                toast.dark(' ✔️ Cadastro concluido com secesso!');
                navigate('/login')
                }

            }

            else {
                toast.warn('Email inválido')
            }


        }
        catch (err) {
            toast.error(err.response.data.erro);
            console.log(err)
        }
    }




    return (
        <main className='main-cadastro-usuario'>
            <section className='section-cadastro-cl1'>
                <div>
                    <img src={LogoModelle} alt='logo' className='logo-modelle' />

                    <h1 className='cadastro-titulo-criarConta' > Criar conta </h1>

                    <div className='cadastro-div-camposObrigatorios' >
                        <p className='cadastro-p-camposObrigatorios'> * Campos obrigatorios </p>

                        <div className='div-cadastro-inputs'>
                            <input type='text' className='cadastro-inputs' placeholder='Nome' onChange={e => setNome(e.target.value)} />
                        </div>

                        <div className='div-cadastro-inputs'>
                            <input type='date' className='cadastro-inputs' onChange={e => setDtNascimento(e.target.value)} />
                        </div>

                        <div className='div-cadastro-inputs' >
                            <IMaskInput mask='(00) 00000-0000' type='text' maxLength="15" className='cadastro-inputs' placeholder='Telefone' onChange={e => setTelefone(e.target.value)} />
                        </div>

                        <div className='div-cadastro-inputs'>
                            <input type='text' className='cadastro-inputs' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className='div-cadastro-inputs'>
                            <input type='text' className='cadastro-inputs' placeholder='Confirmar email' value={email2} onChange={e => setEmail2(e.target.value)} />
                        </div>
                        <p className='erro'> <b> {erroEmail} </b> </p>

                        <div className='div-cadastro-inputs'>
                            <input type='password' className='cadastro-inputs' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>

                        <div className='div-cadastro-inputs-confirmarSenha'>
                            <input type='password' className='cadastro-inputs' placeholder='Confrirmar Senha' value={senha2} onChange={e => setSenha2(e.target.value)} />
                        </div>
                        <p className='erro'> <b> {erroSenha} </b> </p>

                        <div>
                            <button className='butao-criarConta' onClick={cadastrarUsuario} > Criar conta </button>
                        </div>

                        <Link to='/login' className='cadastro-jaPossuoConta'>Ja possuo Conta </Link>
                    </div>
                </div>

                <p className='cadastro-p-AllRightsReserved'> All rights reserved © </p>
            </section>

            <section className='section-cadastro-cl2' >
                <div className='div-cadastro-imagemMulher' >
                    <img src={ImagemCadastroUsuario} alt='logo' className='cadastro-imagem-mulher' />
                </div>
            </section>
        </main>
    );
}