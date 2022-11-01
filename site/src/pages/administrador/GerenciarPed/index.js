//import { useNavigate} from 'react-router-dom'
//import storage from 'local-storage'
import CabecalhoAdm from '../../../components/cabecalhoadm'

import './index.scss'
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
                <h1>Pedidos</h1>
            </div>
            <div>
                <table className='gerenciar-table'>
                    <thead className='gereciar-thead-table'>
                        <tr className='gereciar-tr-titulo'>
                            <th>Enviado para</th>
                            <th>Produto</th>
                            <th>Data</th>
                            <th>N°</th>
                            <th>Preço</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='gereciar-tbody'>
                        <tr className='gereciar-tr'>
                            <td className='gereciar-td' >Vitão</td>
                            <td className='gereciar-td' >Camiseta Versace</td>                               
                            <td className='gereciar-td' >12 / 10 / 2006</td>
                            <td className='gereciar-td' ><span># </span>07</td>
                            <td className='gereciar-td' ><span>R$ </span>1.954</td>
                            <td>
                                &nbsp;&nbsp;
                                <img src={LogoLupa} alt='remover' />
                            </td>
                        </tr>

                        <tr className='gereciar-tr'>
                            <td className='gereciar-td' >Vitão</td>
                            <td className='gereciar-td' >Camiseta Versace</td>                               
                            <td className='gereciar-td' >12 / 10 / 2006</td>
                            <td className='gereciar-td' ><span># </span>07</td>
                            <td className='gereciar-td' ><span>R$ </span>1.954</td>
                            <td>
                                &nbsp;&nbsp;
                                <img src={LogoLupa} alt='remover' />
                            </td>
                        </tr>

                        <tr className='gereciar-tr'>
                            <td className='gereciar-td' >Vitão</td>
                            <td className='gereciar-td' >Camiseta Versace</td>                               
                            <td className='gereciar-td' >12 / 10 / 2006</td>
                            <td className='gereciar-td' ><span># </span>07</td>
                            <td className='gereciar-td' ><span>R$ </span>1.954</td>
                            <td>
                                &nbsp;&nbsp;
                                <img src={LogoLupa} alt='remover' />
                            </td>
                        </tr>

                        <tr className='gereciar-tr'>
                            <td className='gereciar-td' >Vitão</td>
                            <td className='gereciar-td' >Camiseta Versace</td>                               
                            <td className='gereciar-td' >12 / 10 / 2006</td>
                            <td className='gereciar-td' ><span># </span>07</td>
                            <td className='gereciar-td' ><span>R$ </span>1.954</td>
                            <td>
                                &nbsp;&nbsp;
                                <img src={LogoLupa} alt='remover' />
                            </td>
                        </tr>
                        <tr className='gereciar-tr'>
                            <td className='gereciar-td' >Vitão</td>
                            <td className='gereciar-td' >Camiseta Versace</td>                               
                            <td className='gereciar-td' >12 / 10 / 2006</td>
                            <td className='gereciar-td' ><span># </span>07</td>
                            <td className='gereciar-td' ><span>R$ </span>1.954</td>
                            <td>
                                &nbsp;&nbsp;
                                <img src={LogoLupa} alt='remover' />
                            </td>
                        </tr>
                        <tr className='gereciar-tr'>
                            <td className='gereciar-td' >Vitão</td>
                            <td className='gereciar-td' >Camiseta Versace</td>                               
                            <td className='gereciar-td' >12 / 10 / 2006</td>
                            <td className='gereciar-td' ><span># </span>07</td>
                            <td className='gereciar-td' ><span>R$ </span>1.954</td>
                            <td>
                                &nbsp;&nbsp;
                                <img src={LogoLupa} alt='remover' />
                            </td>
                        </tr>
                        <tr className='gereciar-tr'>
                            <td className='gereciar-td' >Vitão</td>
                            <td className='gereciar-td' >Camiseta Versace</td>                               
                            <td className='gereciar-td' >12 / 10 / 2006</td>
                            <td className='gereciar-td' ><span># </span>07</td>
                            <td className='gereciar-td' ><span>R$ </span>1.954</td>
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