import './index.scss';
import '../../assets/common/index.scss'
import { Link } from 'react-router-dom';
import IconBrasil from '../../assets/image/icon-brasil-rodapé.png'

export default function Index(){
    return(
        <main className='main-rodapé'>
           <h1 className='rodape-modelle'> Modelle </h1>
           <hr className='rodape-hr' />

           <div className='rodape-div-informações'>
                <div className='rodape-info-brasil'>
                    <img src={IconBrasil} alt='logo-brasil' className='rodape-logo-brasil' />
                    <p className='rodape-txtBrasil'> Brasil</p>
                </div>

                <a href="https://api.whatsapp.com/send?phone=5511988749207" className='rodape-contato'> Contato </a>
 
                <a href="https://www.instagram.com/modelle_ofc/" className='rodape-sigaNos'> Siga-nos</a>

                <Link className='tag-link' to='/user/condicoesEPrivacidade'>
                    <p className='rodape-condições'>Condições legais e privacide </p>
                </Link>
           </div>


           <div className='rodape-informações-2'>
                <p className='rodape-Allrightsreserved'>All rights reserved ©</p>

                <p className='rodape-info-localizacao'>Rua Fidêncio Ramos, 302 CEP 04551-010 São Paulo, SP, Brasil CNPJ 32.331.472/0001-13</p>
           </div>
        </main>
    );
}