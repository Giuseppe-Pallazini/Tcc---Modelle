import './index.scss'
import '../../assets/common/index.scss';
import { buscarImagem, listarTodos } from '../../api/produtoAPI';
import IconeRemover from '../../assets/image/remover-svg.svg';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { API_URL } from '../../api/config';

import Storage from 'local-storage';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Index() {


    return (
        <main className='main-carrinho'>

            <section className='carrinho-section1'>

                <div>
                    <img />
                </div>

                <div>
                    <p> ID: { } </p>
                    <p> Camiseta Versace </p>
                    <hr />
                    <div>
                        <p> Cor</p>
                        {/* {{backgroudColor:}} */}
                    </div>
                    <div>
                        <p> Tamanho: </p>
                        <p> M </p>
                    </div>
                </div>

            </section>

        </main>
    );
}