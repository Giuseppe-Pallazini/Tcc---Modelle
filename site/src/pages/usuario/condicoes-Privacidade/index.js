import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'

import Cabecalho from '../../../components/cabecalhouser/index.js'
import Rodape from '../../../components/Rodapé/index.js'
import './index.scss';
import { Link } from 'react-router-dom';
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main className='main-condições-principal'>
            <Cabecalho/>

                <section className='condições-section-principal'>
                    <div className='div-titulo-btn'>
                        <div className='condições-div-botão'> 
                            <Link to='/'>
                                <button className='condições-botão-voltar'> Voltar</button>
                            </Link>    
                        </div>
                        <div className='condições-div-titulo'> 
                            <h1> Condições Legais e Privacidade </h1>
                        </div>
                    </div>
                    

                    <div className='condições-div-text'>
                        <p className='condições-text-condições'>
                        A política de privacidade (ou declaração de política de privacidade) é o documento por meio do qual a pessoa física ou jurídica que mantém um site ou aplicativo expõe e explica a todos os interessados a forma como os dados pessoais dos usuários da plataforma serão tratados.

O assunto é regulamentado, no Brasil, principalmente pela Lei Geral de Proteção de Dados Pessoais (LGPD), lei que estabeleceu uma série de exigências àqueles que realizam operações de tratamento de dados pessoais. A lei se aplica:

se a operação de tratamento é realizada no território nacional;
se a atividade de tratamento tem por objetivo a oferta de produtos ou serviços ou o tratamento de dados de indivíduos localizados no território nacional;
se os dados pessoais são coletados no território nacional.
Pela lei, dado pessoal é qualquer informação relacionada a pessoa identificada ou identificável.

A expressão "tratamento de dados pessoais" abrange praticamente tudo aquilo que se pode fazer com estes dados, como as atividades de coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.

Entre as obrigações que a lei impõe a quem realiza qualquer destas atividades, está a de ser transparente. Dessa forma, todo aquele que trata dados pessoais, incluindo os mantenedores de sites ou aplicativos, deve informar os titulares dos referidos dados, por exemplo, acerca da forma como são utilizados e dos motivos pelos quais são tratados.

Por meio do presente modelo, será possível, dentre outros:

informar ao usuário do site ou aplicativo quem é o controlador dos dados pessoais, ou seja, quem é a pessoa física ou jurídica que decide o que se faz com os dados coletados, armazenados ou, de qualquer outra forma, utilizados;
informar ao usuário do site ou aplicativo quais são os dados pessoais coletados e utilizados pelo site ou aplicativo, explicitando os momentos nos quais as coletas são realizadas e as finalidades para as quais os dados são utilizados;
informar ao usuário quais são seus direitos e as formas pelas quais pode exercê-los;
informar ao usuário os meios de contato com o Encarregado de Proteção de Dados Pessoais (Data Protection Officer - DPO);
informar ao usuário quais são as bases legais que fundamentam o tratamento de dados pessoais.
Este documento não abrange as normas contidas no Regulamento Geral de Proteção de Dados da União Europeia (RGPD ou GDPR).

 

O que são dados pessoais?

A lei brasileira define "dado pessoal" como todo aquele que se refira a uma pessoa física identificada ou identificável. Na prática, a expressão compreende todo dado que permite identificar uma pessoa ou que se relacione a uma pessoa específica. Além dos dados normalmente entendidos como pessoais (tais como nome, endereço, data de nascimento, CPF etc.), é possível que diversos outros também o sejam, como um histórico de compras, de fotos ou de mensagens.

Assim, para dizer se um dado é pessoal ou não, o contexto é importante, de modo que um dado considerado pessoal em um caso pode não ser em outro, a depender da possibilidade ou não de se identificar uma pessoa a partir dele ou do fato de ele estar ou não vinculado a um usuário específico.

Além disso, os dados pessoais podem ser sensíveis ou não. Pela LGPD, um dado sensível é todo dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.

Na política de privacidade, deverão ser especificados os dados dos usuários que serão tratados, incluindo informações como momento em que são coletados, finalidades do tratamento e prazos de armazenamento.

 

O que são bases legais de tratamento de dados pessoais?

Uma base legal para o tratamento de dados pessoais nada mais é que uma justificativa permitida em lei para que uma pessoa ou empresa possa tratar dados pessoais. A LGPD exige que cada atividade de tratamento seja justificada com base em um dos fundamentos previstos na lei.

A base legal mais conhecida é o consentimento, que ocorre quando o usuário de um determinado site ou aplicativo concorda com as regras da plataforma quanto à utilização de seus dados. Esta não é, porém, a única justificativa permitida em lei.

No caso dos dados pessoais em geral, este modelo de política de privacidade somente abrange casos em que o tratamento é realizado:

mediante o consentimento do titular dos dados pessoais (por exemplo, nos casos em que o titular concorda com a realização de determinada atividade com seus dados pessoais, clicando em um botão específica ou marcando um checkbox);
para o cumprimento de obrigação legal ou regulatória pelo controlador (por exemplo, a Lei Federal n. 12.965/2014 determina que os provedores de aplicações na internet têm o dever de armazenar informações referentes à data e hora de uso de uma determinada aplicação de internet a partir de um determinado endereço IP por seis meses, sendo que, neste caso, estes dados podem ser coletados e armazenados apenas com fundamento nesta base legal);
para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular dos dados pessoais (por exemplo, nos casos em que o site ou aplicativo vende um produto que será entregue na residência do usuário, caso em que será necessário armazenar os dados da transação e alguns dados cadastrais, a fim de viabilizar o cumprimento do contrato);
quando necessário para atender aos interesses legítimos do controlador ou de terceiro (por exemplo, nos casos em que o envio de marketing direcionado é feito com base nos interesses do controlador, desde que observados todos os requisitos da LGPD);
para o exercício regular de direitos em processo judicial, administrativo ou arbitral (por exemplo, no caso do armazenamento de transações comerciais realizadas dentro de um site ou aplicativo, até o fim do prazo prescricional de cinco anos previstos no Código de Defesa do Consumidor);
para a proteção do crédito (por exemplo, nos casos em que uma instituição financeira utiliza os dados do usuário para fazer consultas em bureaus de crédito, a fim de evitar inadimplência).
Em se tratando de dados pessoais sensíveis, este modelo considera o tratamento realizado:

mediante o consentimento do titular dos dados pessoais;
para o cumprimento de obrigação legal ou regulatória pelo controlador;
para o exercício regular de direitos em processo judicial, administrativo ou arbitral;
para a garantia da prevenção à fraude e à segurança do titular, nos processos de identificação e autenticação de cadastro em sistemas eletrônicos, resguardados os direitos do titular e exceto no caso de prevalecerem direitos e liberdades fundamentais do titular que exijam a proteção dos dados pessoais (por exemplo, nos casos em que a biometria é absolutamente necessária para garantir a segurança de determinada transação realizada no site ou no aplicativo).
A lei prevê, ainda, outras bases legais. No entanto, este documento somente permite que se escolham entre as bases legais informadas nesta seção, de modo que, caso as operações de tratamento de dados pessoais realizadas pelo site ou aplicativo sejam ou devam ser justificadas com fundamento em outras bases legais não mencionadas aqui, este modelo não deve ser utilizado.

No caso dos dados pessoais de crianças e adolescentes, se forem tratados, a única base legal admitida é o consentimento dos pais ou responsáveis.

 

Como utilizar este documento?

Após integral e cuidadosamente preenchida, a política de privacidade deve ser colocada à disposição para consulta direta dos internautas, em link de fácil acesso.

Em alguns casos, pode ser necessário que os usuários do site ou do aplicativo concordem com as normas contidas neste documento. Em outros, pode bastar que o documento seja divulgado e disponibilizado.

Em caso de modificação da política, sua versão atualizada deve ser disponibilizada imediatamente no site ou aplicativo, com a notificação dos usuários sobre as alterações realizadas.

 

Situações não acobertadas por este modelo

Este modelo de política de privacidade pode não se aplicar a situações que demandem uma política mais detalhada. Além disso, nos casos em que alguma operação de tratamento de dados pessoais for justificada com fundamento em bases legais não abrangidas por este documento, ele não deverá ser utilizado.

Além disso, é possível que as operações de tratamento de dados pessoais realizadas no âmbito do site ou do aplicativo sejam regulamentadas por outras normas além da Lei Geral de Proteção de Dados Pessoais. É o caso, por exemplo, das operações de tratamento de dados pessoais de cidadãos da União Europeia, caso em que se aplicam as normas do Regulamento Geral de Proteção de Dados Pessoais da União Europeia (RGPD ou GDPR). Assim, sempre que um site ou aplicativo for acessado por cidadãos europeus, as normas do RGPD devem ser observadas.

Ao utilizar este modelo, é preciso estar seguro de que atenderá às suas necessidades. Se tiver dúvidas quanto à aplicabilidade do presente documento à sua demanda, um profissional qualificado deverá ser consultado.

 

O Direito aplicável

O uso da internet é regulado, no Brasil, pelo Marco Civil da Internet (Lei Federal n. 12.965, de 23 de abril de 2014), regulamentado pelo Decreto n. 8.771, de 11 de maio de 2016, e o tratamento de dados pessoais é regulado pela Lei Federal n. 13.709, de 14 de agosto de 2018 (Lei de Proteção de Dados Pessoais).

 

Como editar o modelo?

Você preenche um formulário. O documento é redigido diante dos seus olhos, conforme as suas respostas.

No fim, você o recebe nos formatos Word e PDF. Você pode editá-lo e reutilizá-lo.

Preencher o modelo
Um guia para te ajudar: LGPD para empresas: o que é e como se adequar

Outros nomes para o documento: Política de privacidade adaptada à lei de proteção de dados pessoais, Política de privacidade sem termos de uso, Políticas de privacidade, Regras de privacidade, Termo de privacidade

País: Brasil

Propriedade intelectual e novas tecnologias - Outros modelos de documentos jurídicos para baixar
Contrato de manutenção de software
Termos e condições gerais de uso e/ou de venda
Termo de cessão de direitos para uso de imagem
Contrato de cessão de direitos autorais
Inventário de dados pessoais
Contrato de licenciamento de propriedade industrial
Contrato de prestação de serviço de criação de site
Termo de consentimento para o tratamento de dados pessoais
Termo de consentimento para o tratamento de dados pessoais de criança
Avaliação de legítimo interesse
Termo de consentimento para uso de imagem (LGPD)
Contrato de parceria para publicidade com digital influencer
Contrato de gerenciamento de redes sociais
                        </p>
                    </div>
                </section>


            <Rodape />
        </main> 
    );
}