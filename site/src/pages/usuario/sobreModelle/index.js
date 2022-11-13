import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import Cabecalho from '../../../components/cabecalhouser/index.js'
import Rodape from '../../../components/Rodapé/index.js'
import ImagemSobreModelle from '../../../assets/image/imagem-sobreModelle.png'
import { Link } from 'react-router-dom'
import './index.scss';
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    function goBack() {
        window.history.back()
    }
    return(
       <main className='main-sobreModelle'>
            <Cabecalho />

                <section className='sobreModelle-section-principal'> 
                    <div className='sobreModelle-titulo-btn'>
                        <div className='sobreModelle-div-botão'>
                            <Link to='/'>
                                <button className='condições-botão-voltar'> Voltar</button>
                            </Link>  
                        </div>

                        <div className='sobreModelle-div-titulo'>
                            <h1>Quem é modelle?</h1>
                        </div>
                    </div>
                    
                    <div className='sobreModelle-imagem-text'>
                        <div className='sobreModelle-div-imagem'>
                            <img src={ImagemSobreModelle} alt='imagem-loja' />
                        </div>

                        <div className='sobreModelle-div-text'>
                            <p>Mais uma noite como todas as anteriores. Pego minha caneca de café cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto. Observo a noite fria e chuvosa, até parece confortável por um momento, se não fossem as dezenas de preocupações que me desmotivam a cada dia.
    Penso em você, mesmo sabendo o quão longe está de mim, sinto aquele amor que continua a me desgraçar intensamente a cada dia, e penso quando enfim poderei te ter comigo. Sei lá, o café chega ao fim e trago a ultima ponta, nada muda. É como se eu fosse passar por isso mais uns longos anos a frente.
    Cada vez mais tenho a sensação de incertezas e inseguranças e tento me manter firme apesar disso. Algumas coisas parecem dar certo e maioria não, tipo você.
    Então após 10 minutos refletindo, largo tudo, fecho a janela e volto pro meu mundo dentro do quarto. Não sei até quando, não sei o porquê, só sei que tá tudo tão errado e quero me livrar disso o quanto antes. E tu n</p>
                        </div>
                    </div>
                </section>
            <Rodape />
        </main> 
    );
}