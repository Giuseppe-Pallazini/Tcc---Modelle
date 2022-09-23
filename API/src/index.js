import 'dotenv/config'

import LoginController from './controller/loginController.js'
import CategoriaController from './controller/categoriaController.js'
import ModeloController from './controller/modeloController.js'


import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors())
server.use(express.json())

// config endpoints
server.use(LoginController)
server.use(CategoriaController)
server.use(ModeloController)


server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`))