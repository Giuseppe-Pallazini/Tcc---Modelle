import './index.scss'
import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'
import CabecalhoAdm from '../../../components/cabecalhoadm'

import LogoLupa from '../../../assets/image/logo-lupa.png'
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main className='main-gerenciarUsuarios'>
            <CabecalhoAdm />
            <section className='section-tables-gerenciar'> 
                <div>
                    <h1 className='gerenciarFeedbacks-h1'>FeedBacks</h1>
                </div>
                
                <div className='div-table'>
                    <table className='gerenciarUser-table'>
                        <thead className='gereciarFeed-thead-table'>
                            <tr className='gereciarFeed-tr-titulo'>
                                <th>USUARIO</th>
                                <th>E-MAIL</th>
                                <th>Mensagem</th>
                                <th>Pedido</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='gereciarFeed-tbody'>
                            <tr className='gereciarFeed-tr'>
                                <td className='gereciarFeed-td' >Vitão</td>
                                <td className='gereciarFeed-td' >Vg9459544@gmail.com</td>                               
                                <td className='gereciarFeed-td-mensagem' >Atedimento é otimo!!!.....</td>
                                <td className='gereciarFeed-td' ># 01</td>
                                <td>
                                    
                                    <img src={LogoLupa} alt='logo-lupa' />
                                </td>
                            </tr>

                            <tr className='gereciarFeed-tr'>
                                <td className='gereciarFeed-td' >Vitão</td>
                                <td className='gereciarFeed-td' >Vg9459544@gmail.com</td>                               
                                <td className='gereciarFeed-td-mensagem' >Atedimento é otimo!!!.....</td>
                                <td className='gereciarFeed-td' ># 01</td>
                                <td>
                                    
                                    <img src={LogoLupa} alt='logo-lupa' />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>
        </main> 
    );
}