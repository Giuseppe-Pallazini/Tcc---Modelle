import { Route, Routes, BrowserRouter } from 'react-router-dom'

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
                <Route path='/' element={< HomeAdm />} />
                <Route path='/cadastroProduto' element={< CadastroProd />} />
                <Route path='/gerenciarProduto' element={< GerenciarProd />} />
                <Route path='/alterarCard' element={< AlterarCard />} />
                <Route path='/alterarCarrolsel' element={< AlterarCassolsel />} />
                <Route path='/cadastrarCupom' element={< CadastroCupom />} />
                <Route path='/gerenciarFeedbecks' element={< GerenciarFeedbecks />} />
                <Route path='/detalhesFeedbecks' element={< DetalhesFeedbecks />} />
                <Route path='/gerenciarPed' element={< GerenciarPed />} />
                <Route path='/detalhesPed' element={< DetalhesPed />} />
                <Route path='/gerenciarUsuarios' element={< GerenciarUsuarios />} />
                <Route path='/editarPeca' element={< EditarPeca />} />
            </Routes>
        </BrowserRouter>
    )
}