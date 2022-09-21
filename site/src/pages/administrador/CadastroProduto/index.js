import './index.scss'
import Cabecalho from '../../../components/cabecalhoadm/index'
import ImagemX from '../../../assets/image/logo-x-input.svg'
import ImagemCerto from '../../../assets/image/logo-certo-input.svg'
import EscolherImg from '../../../assets/image/escolher-imagem.svg'
import InputMulticolor from '../../../assets/image/logo-multicores.svg'
import LogoAddCor from '../../../assets/image/logo-mais.svg'

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
                </div>

                <p className='cadastro-marcas-apenasuma'> * Apenas uma marca </p>
            </div> 

 
            <div className='div-cadastro-column-02'>

                <div className='cadastro-cl2-camposobrigatorios'>
                    <p> * Campos obrigatorios </p>
                </div>

                <div>
                    <input type='text' className='cadastro-cl2-nomeProduto' placeholder='Nome do produto' />
                    <img src={ImagemX} alt='logo' className='logo-x-produto' /> 
                    <img src={ImagemCerto} alt='logo' className='logo-certo-produto' />  
                </div>

                
                <div>
                    <input type='text' className='cadastro-cl2-complementoProduto' placeholder='Complemento produto' />
                    <img src={ImagemX} alt='logo' className='logo-x-complemento' /> 
                    <img src={ImagemCerto} alt='logo' className='logo-certo-complemento' />
                </div>
                
                <div className='cadastro-div-valorProd'>
                    <input type='text' className='cadastro-cl2-valor' placeholder='Valor(R$)' />
                    <img src={ImagemX} alt='logo' className='logo-x-valor' /> 
                    <img src={ImagemCerto} alt='logo' className='logo-certo-valor' />  
                </div>
            </div>


            <div>
                <div>
                    <p className='cadastro-p-parcelas'> Parcela(s)</p>
                    <input type='text' placeholder='0' className='cadastro-input-parcelas' />
                </div>


                <div>
                    <p className='cadastro-p-juros'> Juros</p>
                    <input type='text' placeholder='0%' className='cadastro-input-juros' />
                </div>
            </div>


            <div className='cadastro-tamanhos'>
                <p className='cadastro-p-tamanhos'> Tamanho(s)</p>
                
                <div className='cadastro-inputs-tamanhos'>
                    <input type='checked' className='cadastro-input-tamanho-PP' placeholder='PP' />
                    <input type='checked' className='cadastro-input-tamanho-P' placeholder='P' />
                    <input type='checked' className='cadastro-input-tamanho-M' placeholder='M' />
                    <input type='checked' className='cadastro-input-tamanho-G' placeholder='G' />
                    <input type='checked' className='cadastro-input-tamanho-GG' placeholder='GG' />
                </div> 
            </div>

            <div className='div-cadastro-cores' >
                <div>
                <p className='cadastro-p-cores'>Cor(es) </p>
                </div>
                <div className='cadastro-cores-input'>
                    <img src={InputMulticolor} alt='logo' className='cadastro-input-multicores' />
                    <input type='checked' className='cadastro-input-cores-exemplo'/>
                    <img src={LogoAddCor} alt='logo' className='cadastro-logo-addCor' />
                </div>
            </div>
            

            <div className='div-cadastro-modelos'>
                <div>
                    <p className='cadastro-p-modelo'> Modelo(s)</p>
                </div>
                <div classname='cadastro-modelo-l1'> 
                    <input type='checked' className='cadastro-modelo-camisa' placeholder='Camisa' />
                    <input type='checked' className='cadastro-modelo-calca' placeholder='Calça' />
                    <input type='checked' className='cadastro-modelo-bermuda' placeholder='Bermuda' />
                    <input type='checked' className='cadastro-modelo-blusa' placeholder='Blusa' />
                </div>

                <div className='cadastro-modelo-l2'>
                    <input type='checked' className='cadastro-modelo-relogios' placeholder='Relógios' />
                    <input type='checked' className='cadastro-modelo-moletom' placeholder='Moletom' />
                    <input type='checked' className='cadastro-modelo-casaco' placeholder='Casaco' />
                    <input type='checked' className='cadastro-modelo-sueter' placeholder='Suéter' />
                </div>

                <div className='cadastro-modelo-l3'>
                    <input type='checked' className='cadastro-modelo-polo' placeholder='Polo' />    
                </div>
            </div>



            <div>
                <div>
                    <p> Cregoria(s) </p>
                </div>

                <div>
                    <input type='checked' className='cadastro-categoria-masculino' placeholder='Masculino' />
                    <input type='checked' className='cadastro-categoria-Feminino' placeholder='Feminino' />
                    <input type='checked' className='cadastro-categoria-Novidades' placeholder='Novidades-' />
                </div>
            </div>
        </main>

    );
}
