import {listarUsuarios} from '../repository/listarUsuariosRepository.js'

import { Router } from 'express'
const server = Router();



server.get('/listarUsuarios', async (req, resp) => {
    try {
        const resposta = await listarUsuarios();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;