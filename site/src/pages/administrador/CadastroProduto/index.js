import './index.scss'
import Cabecalho from '../../../components/cabecalhoadm/index'
import ImagemX from '../../../assets/image/logo-x-input.svg'
import ImagemCerto from '../../../assets/image/logo-certo-input.svg'
import EscolherImg from '../../../assets/image/escolher-imagem.svg'

export default function CadastroProduto(){
    return(
        <main className='main-cadastro'>
            < Cabecalho />
            <div className='titulo-cadastro'>
                <h1> Cadastro </h1>
            </div>
            
            <div className='div-cadastro-column-01'>
            <div className='div-dashboard-cadastro-pricipal'>
                <div className='div-cadastro-titulo-addfoto'>
                    <p> Adicionar foto(s) </p>
                    <img src={ImagemX} alt='logo' /> 
                    <img src={ImagemCerto} alt='logo'/>                     
                </div>
                
                <div className='div-dashboard-cadastro-inputs'>
                    <div className='cadastro-input-img-1'>
                            <input type='file' />
                            <img src={EscolherImg} alt='logo' />
                    </div>
                    <div className='cadastro-escolher-img-cl2'> 
                        <div className='cadastro-input-img-2'>
                            <input type='file' />
                            <img src={EscolherImg} alt='logo' />
                        </div>
                        <div className='cadastro-input-img-3'>
                            <input type='file' />
                            <img src={EscolherImg} alt='logo' />
                        </div>
                        <div className='cadastro-input-img-4'>
                            <input type='file' />
                            <img src={EscolherImg} alt='logo'/>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className='div-dashboard-cadastro-composição'>
                <input type='text' className='cadastro-input-composicao' placeholder='Composição do produto ' />
                <input type='text' className='cadastro-input-composicao-2'  />
                <input type='text' className='cadastro-input-composicao-3'  />
            </div>

            <div className='div-dashboard-cadastro-detalhes'>
                <input type='text' className='cadastro-input-detalhes' placeholder='Detalhes do produto' />
                <input type='text' className='cadastro-input-detalhes-2'  />
                <input type='text' className='cadastro-input-detalhes-3'  />
            </div>

            <div className='div-dashboard-cadastro-marca' >
                <div className='cadastro-titulo-marcas'>
                    <p> Marcas(s)</p>
                </div>
                <div className='div-dashboard-cadastro-marca-l1'>
                    <input type='checked' className='cadastro-marcas-gucci' placeholder='Gucci' />
                    <input type='checked' className='cadastro-marcas-balenciaga' placeholder='Balenciaga' />
                    <input type='checked' className='cadastro-marcas-dolceEgabbana' placeholder='Dolce & Gabbana' />
                </div>

                <div className='div-dashboard-cadastro-marca-l2'>
                    <input type='checked' className='cadastro-marcas-burberry' placeholder='Burberry' />
                    <input type='checked' className='cadastro-marcas-morley' placeholder='Morley' />
                    <input type='checked' className='cadastro-marcas-kenzo' placeholder='Kenzo' />
                    <input type='checked' className='cadastro-marcas-modelle' placeholder='Modelle' />
                </div>
                
                <div className='div-dashboard-cadastro-marca-l3'>
                    <input type='checked' className='cadastro-marcas-zegna' placeholder='Zegna' />
                    <input type='checked' className='cadastro-marcas-louisvuitton' placeholder='Louis Vuitton' />
                    <input type='checked' className='cadastro-marcas-prada' placeholder='Prada' />
                </div>

                <div className='div-dashboard-cadastro-marca-l4'>
                    <input type='checked' className='cadastro-marcas-versace' placeholder='Versace' />
                    <p className='cadastro-marcas-apenasuma'> * Apenas uma marca </p>
                </div>
            </div> 

 
            <div className='div-cadastro-column-02'>


            </div>


        </main>

    );
}
