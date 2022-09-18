import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ROTAS PARA USUARIOS

import Login from './pages/usuario/Login'
import Cadastro from './pages/usuario/cadastro'
import Carrinho from './pages/usuario/carrinho'
import Condicoeseprivacidade from './pages/usuario/condicoes-Privacidade'
import DetalheProduto from './pages/usuario/detalhesProduto'
import FalhaNaPesquisa from './pages/usuario/falhaNaPesquisa'
import Feedback from './pages/usuario/feedback'
import LandingPage from './pages/usuario/landingPage'
import ListaDeDesejos from './pages/usuario/listaDeDesejos'
import MenuFeminino from './pages/usuario/menuFeminino'
import MenuMasculino from './pages/usuario/menuMasculino'
import MenuNovidades from './pages/usuario/menuNovidades'
import PagamentoCartao from './pages/usuario/pagamentoCartao'
import PagamentoPix from './pages/usuario/pagamentoPix'
import PagamentoQrCode from './pages/usuario/pagamentoQrCode'
import RecuperarSenha from './pages/usuario/recuperarSenha'
import EnviarCodigo from './pages/usuario/recuperarSenha-codigo'
import seusPedidos from './pages/usuario/seusPedidos'
import SobreModelle from './pages/usuario/sobreModelle'


// ROTAS PARA ADMIN

import HomeAdm from '../src/pages/administrador/HomeAdministrador'
import CadastroProd from '../src/pages/administrador/CadastroProduto'
import GerenciarProd from '../src/pages/administrador/GerenciarProd'
import AlterarCard from '../src/pages/administrador/AlterarCard'
import AlterarCassolsel from '../src/pages/administrador/AlterarCarrousel'
import CadastroCupom from '../src/pages/administrador/CadastrarCupom'
import GerenciarFeedbecks from '../src/pages/administrador/GerenciarFeedbecks'
import DetalhesFeedbecks from '../src/pages/administrador/DetalhesFeedbecks'
import GerenciarPed from '../src/pages/administrador/GerenciarPed'
import DetalhesPed from '../src/pages/administrador/DetalhesPed'
import GerenciarUsuarios from '../src/pages/administrador/GerenciarUsuarios'
import EditarPeca from '../src/pages/administrador/EditarPeca'


export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Login />} />

                // ROTAS ADM

                <Route path='/admin/home' element={<HomeAdm/>}/>
                <Route path='/admin/cadastroprod' element={< CadastroProd />} />
                <Route path='/admin/gerenciarProduto' element={< GerenciarProd />} />
                <Route path='/admin/alterarCard' element={< AlterarCard />} />
                <Route path='/admin/alterarCarrolsel' element={< AlterarCassolsel />} />
                <Route path='/admin/cadastrarCupom' element={< CadastroCupom />} />
                <Route path='/admin/gerenciarFeedbecks' element={< GerenciarFeedbecks />} />
                <Route path='/admin/detalhesFeedbecks' element={< DetalhesFeedbecks />} />
                <Route path='/admin/gerenciarPed' element={< GerenciarPed />} />
                <Route path='/admin/detalhesPed' element={< DetalhesPed />} />
                <Route path='/admin/gerenciarUsuarios' element={< GerenciarUsuarios />} />
                <Route path='/admin/editarPeca' element={< EditarPeca />} />


                // ROTAS USUARIOS

                <Route path='/user/landingPage' element={< LandingPage />} />
                <Route path='/user/cadastro' element={< Cadastro />} />
                <Route path='/user/carrinho' element={< Carrinho />} />
                <Route path='/user/condicoesEPrivacidade' element={< Condicoeseprivacidade />} />
                <Route path='/user/destalheProdruto' element={< DetalheProduto />} />
                <Route path='/user/falhaNaPesquisa' element={< FalhaNaPesquisa />} />
                <Route path='/user/feedback' element={< Feedback />} />
                <Route path='/user/listaDeDesejos' element={< ListaDeDesejos />} />
                <Route path='/user/menuFeminino' element={< MenuFeminino />} />
                <Route path='/user/menuMasculino' element={< MenuMasculino />} />
                <Route path='/user/menuNovidades' element={< MenuNovidades />} />
                <Route path='/user/pagamentoCartao' element={< PagamentoCartao />} />
                <Route path='/user/pagamentoPix' element={< PagamentoPix />} />
                <Route path='/user/pagamentoQrCode' element={< PagamentoQrCode />} />
                <Route path='/user/recuperarSenha' element={< RecuperarSenha />} />
                <Route path='/user/enviarCodigo' element={< EnviarCodigo />} />
                <Route path='/user/seusPedidos' element={< seusPedidos />} />
                <Route path='/user/sobreModelle' element={< SobreModelle />} />

            </Routes>
        </BrowserRouter>
    )
}