import './index.scss';
import '../../assets/common/index.scss'

import Imagem1 from '../../assets/image/logo_transparent.png'
import Imagem2 from "../../assets/image/image-login.png";

function App() {
  return (
    <main className="main-login">
      <section className="section-login">

        <div className="div-dashboard-login">
          <img className='div-dashboard-login-img1' src={Imagem1} alt=''/>
          <h1 className='div-dashboard-login-tit1' >Inicie Sessão</h1>
          
          <p className='div-dashboard-login-desc1'>*Campos obrigatorios</p>

          <input className='div-dashboard-login-usuario' type="text" placeholder="Usuário" />
          <input className='div-dashboard-login-senha' type="text" placeholder="Senha" />
          
          
          <button className='div-dashboard-bt'>Login</button>
          
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

export default App;
