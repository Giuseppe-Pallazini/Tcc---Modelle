import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'
import ImagemCadastroUsuario from '../../../assets/image/imagem-cadastro-usuario.png'
import LogoModelle from '../../../assets/image/logo-modelle.svg'


import { Link } from 'react-router-dom'
import './index.scss';
import '../../../assets/common/index.scss'

export default function Index(){
    return(
       <main className='main-cadastro-usuario'>
            <section className='section-cadastro-cl1'>
                <div>
                <img src={LogoModelle} alt='logo' className='logo-modelle' />

                <h1 className='cadastro-titulo-criarConta' > Criar conta </h1>
                    
                    <div className='cadastro-div-camposObrigatorios' >
                        <p className='cadastro-p-camposObrigatorios'> * Campos obrigatorios </p>

                        <div className='div-cadastro-inputs'>
                            <input className='cadastro-inputs' placeholder='Nome' />
                        </div>

                        <div className='div-cadastro-inputs'>
                            <input className='cadastro-inputs' placeholder='Data de nascimento       _/_/_' />
                        </div>

                        <div className='div-cadastro-inputs' >
                            <input className='cadastro-inputs' placeholder='Telefone' />
                        </div>

                        <div className='div-cadastro-inputs'>
                            <input className='cadastro-inputs' placeholder='Email' />
                        </div>

                        <div className='div-cadastro-inputs'>
                            <input className='cadastro-inputs' placeholder='Confirmar email' />
                        </div>

                        <div className='div-cadastro-inputs'>
                            <input className='cadastro-inputs' placeholder='Senha' />
                        </div>
                            <p className='cadastro-p-qtdCaracteres'> A senha deve conter de 6 a 8 caracteres </p>

                        <div className='div-cadastro-inputs-confirmarSenha'>
                            <input className='cadastro-inputs' placeholder='Confrirmar Senha' />
                        </div>

                        <div>
                            <p className='erro-senhar-email'> A senhas não correspondem </p>
                            <button className='butao-criarConta'> Criar conta </button>
                        </div> 

                        <Link to='/' className='cadastro-jaPossuoConta'>Ja possuo Conta </Link>                   
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