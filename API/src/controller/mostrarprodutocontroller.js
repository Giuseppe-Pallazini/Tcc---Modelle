import ListarTodosProdutos from '../repository/mostrarprodutorepository.js';

import { Router } from "express";
const server = Router();

//Listar Roupas
server.get('/admin/todasroupas', async (req, resp) => {
    try {
        const resposta = await ListarTodosProdutos();
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


export default server;