import './index.scss';
import '../../assets/common/index.scss'

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

                <p className='rodape-contato'>Contato</p>
                
                <p className='rodape-QueméModelle'>Quem é Modelle?</p>

                <p className='rodape-sigaNos'>Siga-nos</p>

                <p className='rodape-condições'>Condições legais e privacide </p>
           </div>

           <div className='rodape-informações-2'>
                <p className='rodape-Allrightsreserved'>All rights reserved ©</p>

                <p className='rodape-info-localização'>Rua Fidêncio Ramos, 302 CEP 04551-010 São Paulo, SP, Brasil CNPJ 32.331.472/0001-13</p>
           </div>
        </main>
    );
}