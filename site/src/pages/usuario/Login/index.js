import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.scss';
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

import Imagem1 from '../../../assets/image/logo_transparent.png'
import Imagem2 from "../../../assets/image/image-login.png";

import LoadingBar from 'react-top-loading-bar'

import {login} from '../../../api/usuarioAPI.js'

export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    if(storage('admin-logado')){
        navigate('/admin/home')
    }

    else if (storage('usuario-logado')) {
      navigate('/user/landingpage')
    }

  }, [carregando])

  async function entrarClick() {
    ref.current.continuousStart();
    setCarregando(true)

    try {
        const r = await login(email, senha);
        if (email === "admin" && senha === "1234") {
        storage('admin-logado', r);

        setCarregando(false)
        }
        
        else
          storage('usuario-logado', r)
          setCarregando(false)

        setTimeout(() => { 
            navigate('/');
        }, 2000)

    } catch (err) {
        ref.current.complete();
        setCarregando(false);

        if( err.response.status === 401) {
            setErro(err.response.data.erro);
        }
    }

    }  
  
  return (
    <main className="main-login">
      <LoadingBar color='#99889C' ref={ref} />

      <section className="section-login">

        <div className="div-dashboard-login">
          <img className='div-dashboard-login-img1' src={Imagem1} alt=''/>
          <h1 className='div-dashboard-login-tit1' >Inicie Sessão</h1>
          

          <input className='div-dashboard-login-usuario' type="text" placeholder="Usuário" value={email} onChange={e => setEmail(e.target.value)}/>
          <input className='div-dashboard-login-senha' type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
          
          <div className='div-dashboard-login-erro'>
            {erro}
          </div>
          
          <button className='div-dashboard-bt' onClick={entrarClick} disabled={carregando} >Login</button>
          
          <p className='div-dashboard-desc2' >Esqueceu a senha</p>
          <p className='div-dashboard-desc3'>Criar Conta</p>

          <p className='div-dashboard-desc4'>All rights reserved &copy; </p>

        </div>

        <div className="div-imagem">
          <img className='div-imagem-1' src={Imagem2} alt='' />
        </div>

      </section>
    </main>
  );
}