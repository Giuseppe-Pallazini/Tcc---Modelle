import './index.scss'
import { useNavigate} from 'react-router-dom'
import storage from 'local-storage'
import CabecalhoAdm from '../../../components/cabecalhoadm'

import LogoRemover from '../../../assets/image/logo-remover.svg'
import LogoEditar from '../../../assets/image/logo-editar.svg'
import '../../../assets/common/index.scss'
import {useEffect, useState, useRef} from 'react'

export default function Index(){
    return(
       <main className='main-gerenciarUsuarios'>
            <CabecalhoAdm />

            <h1 className='gerenciarUsuarios-h1'>Usuarios</h1>
            <section className='section-table'>
                <div>
                    <table className='gerenciarUser-table'>
                        <thead className='gereciarUser-thead-table'>
                            <tr className='gereciarUser-tr-titulo'>
                                <th>USUARIO</th>
                                <th>E-MAIL</th>
                                <th>Dt. Nascimento</th>
                                <th>Número</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='gereciarUser-tbody'>
                            <tr className='gereciarUser-tr'>
                                <td className='gereciarUser-td' >Vitão</td>
                                <td className='gereciarUser-td' >Vg9459544@gmail.com</td>                               
                                <td className='gereciarUser-td' >12 / 10 / 2006</td>
                                <td className='gereciarUser-td' >11971218295</td>
                                <td>
                                    <img src={LogoEditar} alt='editar' />
                                    &nbsp;&nbsp;
                                    <img src={LogoRemover} alt='remover' />
                                </td>
                            </tr>
                          
                            <tr className='gereciarUser-tr'>
                                <td className='gereciarUser-td' >Vitão</td>
                                <td className='gereciarUser-td' >Vg9459544@gmail.com</td>                               
                                <td className='gereciarUser-td' >12 / 10 / 2006</td>
                                <td className='gereciarUser-td' >11971218295</td>
                                <td>
                                    <img src={LogoEditar} alt='editar' />
                                    &nbsp;&nbsp;
                                    <img src={LogoRemover} alt='remover' />
                                </td>
                            </tr>
                            <tr className='gereciarUser-tr'>
                                <td className='gereciarUser-td' >Vitão</td>
                                <td className='gereciarUser-td' >Vg9459544@gmail.com</td>                               
                                <td className='gereciarUser-td' >12 / 10 / 2006</td>
                                <td className='gereciarUser-td' >11971218295</td>
                                <td>
                                    <img src={LogoEditar} alt='editar' />
                                    &nbsp;&nbsp;
                                    <img src={LogoRemover} alt='remover' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main> 
    );
}