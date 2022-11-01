import './index.scss'
import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'
import CabecalhoAdm from '../../../components/cabecalhoadm'

import LogoLupa from '../../../assets/image/logo-lupa.png'
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
        <main className='main-gerenciar'>
            <CabecalhoAdm />         

            <div className='div-filtro-buscarAdm'>
                <input placeholder='Buscar'/><img className='' src={LogoLupa} alt='logoLupa' /> 
            </div>

            <section className='section-tables'>
                <div className='gerenciar-h1'>
                    <h1>Feedbacks</h1>
                </div>
                <div>
                    <table className='gerenciar-table'>
                        <thead className='gereciar-thead-table'>
                            <tr className='gereciar-tr-titulo'>
                                <th>USUARIO</th>
                                <th>E-MAIL</th>
                                <th>Mensagem</th>
                                <th>Pedido</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='gereciar-tbody'>
                            <tr className='gereciar-tr'>
                                <td className='gereciar-td' >Vitão</td>
                                <td className='gereciar-td' >Vg9459544@gmail.com</td>                               
                                <td className='gereciar-td' >Atendimento otimo!......</td>
                                <td className='gereciar-td' >07</td>
                                <td>
                                    &nbsp;&nbsp;
                                    <img src={LogoLupa} alt='remover' />
                                </td>
                            </tr>


                            <tr className='gereciar-tr'>
                                <td className='gereciar-td' >Vitão</td>
                                <td className='gereciar-td' >Vg9459544@gmail.com</td>                               
                                <td className='gereciar-td' >Atendimento otimo!......</td>
                                <td className='gereciar-td' >07</td>
                                <td>
                                    &nbsp;&nbsp;
                                    <img src={LogoLupa} alt='remover' />
                                </td>
                            </tr>

                            <tr className='gereciar-tr'>
                                <td className='gereciar-td' >Vitão</td>
                                <td className='gereciar-td' >Vg9459544@gmail.com</td>                               
                                <td className='gereciar-td' >Atendimento otimo!......</td>
                                <td className='gereciar-td' >07</td>
                                <td>
                                    &nbsp;&nbsp;
                                    <img src={LogoLupa} alt='remover' />
                                </td>
                            </tr>

                            <tr className='gereciar-tr'>
                                <td className='gereciar-td' >Vitão</td>
                                <td className='gereciar-td' >Vg9459544@gmail.com</td>                               
                                <td className='gereciar-td' >Atendimento otimo!......</td>
                                <td className='gereciar-td' >07</td>
                                <td>
                                    &nbsp;&nbsp;
                                    <img src={LogoLupa} alt='remover' />
                                </td>
                            </tr>
                            
                        
                        </tbody>
                    </table>
                </div>
            </section>
        </main> 
    );
}