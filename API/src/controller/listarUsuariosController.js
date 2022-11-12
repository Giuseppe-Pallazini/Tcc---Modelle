import {buscarUsuario, listarUsuarios, removerUsuario} from '../repository/listarUsuariosRepository.js'

import { Router } from 'express'
const server = Router();


server.get('/admin/listarUsuarios', async (req, resp) => {
    try {
        const resposta = await listarUsuarios();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.delete('/admin/deletarUsuario/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const reposta = await removerUsuario(id);

        resp.status(200).send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/admin/buscarUsuario', async (req, resp) => {
    try {
        const { nome } = req.query;
        const resposta = await buscarUsuario(nome);

        if(!resposta){
            throw new Error('Usuario não encontrado');
        }
        resp.status(200).send(resposta)
    } catch (err) {
        console.log(err);

    }
})
export default server;