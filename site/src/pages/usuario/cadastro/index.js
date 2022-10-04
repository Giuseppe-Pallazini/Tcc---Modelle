import { useNavigate} from 'react-router-dom'

import { toast } from 'react-toastify';
import ImagemCadastroUsuario from '../../../assets/image/imagem-cadastro-usuario.png'
import LogoModelle from '../../../assets/image/logo-modelle.svg'
import { CadastroUsuario } from '../../../api/usuarioAPI'

import { Link } from 'react-router-dom'
import './index.scss';
import '../../../assets/common/index.scss'
import { useState } from 'react'

export default function Index(){
    const [nome, setNome] = useState('');
    const [dtNascimento, setDtNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    async function cadastrarUsuario() {
        try {
            const novoUsuario = await CadastroUsuario(nome, dtNascimento, telefone, email, senha);
            alert(novoUsuario.id);

            toast.dark(' ✔️ Cadastro concluido com secesso!');

        }
        catch (err) {
            toast.dark(err);
            console.log(err)
        }
    }



    return(
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
                            <input type='text' maxLength="13" className='cadastro-inputs' placeholder='Telefone' onChange={e => setTelefone(e.target.value)} />
                        </div>

                        <div className='div-cadastro-inputs'>
                            <input type='text' className='cadastro-inputs' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className='div-cadastro-inputs'>
                            <input type='text' className='cadastro-inputs' placeholder='Confirmar email' />
                        </div>

                        <div className='div-cadastro-inputs'>
                            <input type='password' maxLength="8" className='cadastro-inputs' placeholder='Senha' onChange={e => setSenha(e.target.value)} />
                        </div>
                            <p className='cadastro-p-qtdCaracteres'> A senha deve conter de 6 a 8 caracteres </p>

                        <div className='div-cadastro-inputs-confirmarSenha'>
                            <input type='password' maxLength="8" className='cadastro-inputs' placeholder='Confrirmar Senha' />
                        </div>

                        <div>
                            <p className='erro-senhar-email'> A senhas não correspondem </p>
                            <button className='butao-criarConta' onClick={cadastrarUsuario} > Criar conta </button>
                        </div> 

                        <Link to='/login' className='cadastro-jaPossuoConta'>Ja possuo Conta </Link>                   
                    </div>
                </div>

                <p className='cadastro-p-AllRightsReserved'> All rights reserved © </p>
            </section>

            <section className='section-cadastro-cl2'>
                <div className='div-cadastro-imagemMulher'>
                    <img src={ImagemCadastroUsuario} alt='logo' className='cadastro-imagem-mulher' />
                </div>
            </section>
       </main> 
    );
}