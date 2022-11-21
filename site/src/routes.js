import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ROTAS PARA USUARIOS

import Login from                   './pages/usuario/Login'
import Cadastro from                './pages/usuario/cadastro'
import Carrinho2 from               './pages/usuario/carrinho2.0(TeOdeioVictor)'
import Condicoeseprivacidade from   './pages/usuario/condicoes-Privacidade'
import DetalheProduto from          './pages/usuario/detalhesProduto'
import LandingPage from             './pages/usuario/landingPage'
import MenuFeminino from            './pages/usuario/menuFeminino'
import MenuMasculino from           './pages/usuario/menuMasculino'
import MenuNovidades from           './pages/usuario/menuNovidades'
import PagamentoCartao from         '../src/pages/usuario/pagamentoCartao'
import SeusPedidos from             './pages/usuario/seusPedidos'


// ROTAS PARA ADMIN

import HomeAdm from             '../src/pages/administrador/HomeAdministrador'
import GerenciarProd from       '../src/pages/administrador/GerenciarProd'
import CadastroCupom from       '../src/pages/administrador/CadastrarCupom'
import GerenciarPed from        '../src/pages/administrador/GerenciarPed'
import GerenciarUsuarios from   '../src/pages/administrador/GerenciarUsuarios'
import CadastroProduto2 from    '../src/pages/administrador/CadastrarProduto2.0'


export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={< Login />} />

                {/* ROTAS ADM */}

                <Route path='/admin/home'                   element={<HomeAdm/>}/>
                <Route path='/admin/cadastroproduto'        element={< CadastroProduto2 />} />
                <Route path='/admin/cadastroproduto/:id'    element={< CadastroProduto2 />} />
                <Route path='/admin/gerenciarProd'          element={< GerenciarProd />} />
                <Route path='/admin/cadastrarCupom'         element={< CadastroCupom />} />
                <Route path='/admin/gerenciarPed'           element={< GerenciarPed />} />
                <Route path='/admin/gerenciarUsuarios'      element={< GerenciarUsuarios />} />


                // ROTAS USUARIOS

                <Route path='/'                             element={< LandingPage />} />
                <Route path='/user/cadastro'                element={< Cadastro />} />
                <Route path='/user/carrinho2'               element={< Carrinho2 />} />
                <Route path='/user/condicoesEPrivacidade'   element={< Condicoeseprivacidade />} />
                <Route path='/user/detalhesProduto/:id'     element={< DetalheProduto />} />
                <Route path='/user/menuFeminino'            element={< MenuFeminino />} />
                <Route path='/user/menuMasculino'           element={< MenuMasculino />} />
                <Route path='/user/menuNovidades'           element={< MenuNovidades />} />
                <Route path='/user/pagamentoCartao'         element={< PagamentoCartao />} />
                <Route path='/user/seusPedidos'             element={< SeusPedidos />} />

            </Routes>
        </BrowserRouter>
    );
}