import './index.scss';
import Imagem1 from "../../assets/image/logo_transparent.png"
import Imagem2 from "../../assets/image/image-login.png";


function App() {
  return (
    <main className="main-login">

      <section className="login-section1">

        <img className="section1-img-logo" src={Imagem1} alt='' />
        <div className="section1-img-modelo-div">
          <img className="section1-img-modelo" src={Imagem2} alt='' />
        </div>

        <div className="login-div1">
          <img className="login-div1-" src="../../../public/assets/images/logo_transparent.png" alt='' />



          <h1> Inicie Sessão </h1>

          <p>* Campos obrigatorios</p>


        </div>
        <div>
          <input type='text' placeholder='Usuário' />

          <input type='text' placeholder='Senha' />





          <button> Login </button>

        </div>
      </section>


    </main>
  );
}

export default App;
