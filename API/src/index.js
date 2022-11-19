import 'dotenv/config'

import LoginController from './controller/loginController.js'
import CategoriaController from './controller/categoriaController.js'
import ModeloController from './controller/modeloController.js'
import MarcaController from './controller/marcaController.js'
import TamanhoController from './controller/tamanhoController.js'
import ImagemController from './controller/imagemController.js'
import ProdutoController from './controller/validarProdutoController.js'
import MostrarProdutoController from './controller/mostrarprodutocontroller.js'
import CadastroUsuarios from './controller/cadastroUsuarioController.js'
import RemoverProduto  from './controller/removerProdutoController.js'
import PedidoController from './controller/pedidoController.js'

import UsuariosController from './controller/listarUsuariosController.js'
import FiltroUserController from './controller/filtroUserController.js'
import FiltroFemininoController from './controller/filtroFeminino.js'
import FiltroNovidadesController from './controller/filtroNovidades.js'
import CadastrarCupomController from './controller/cadastrarCupomController.js'
import ListaDesejo from './controller/desejoController.js'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors())
server.use(express.json())

// config endpoints
server.use(LoginController);
server.use(CategoriaController);
server.use(ModeloController);
server.use(MarcaController);
server.use(TamanhoController);
server.use(ImagemController);
server.use(ProdutoController);
server.use(MostrarProdutoController);
server.use(CadastroUsuarios);
server.use(RemoverProduto);
server.use(PedidoController);
server.use(UsuariosController);
server.use(FiltroUserController);
server.use(FiltroFemininoController);
server.use(FiltroNovidadesController);
server.use(CadastrarCupomController);
server.use(ListaDesejo);

server.use('/storage/fotoProduto', express.static('storage/fotoProduto'));

server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`));