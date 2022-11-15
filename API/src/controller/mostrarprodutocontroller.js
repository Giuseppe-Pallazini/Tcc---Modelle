import {ListarTodosProdutos,ProdutosDetalhes1, ProdutosDetalhes2, ProdutosDetalhes3} from '../repository/mostrarprodutorepository.js';

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

server.get('/admin/todasroupas/detalhes/1', async (req, resp) => {
    try {
        const resposta = await ProdutosDetalhes1();
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/admin/todasroupas/detalhes/2', async (req, resp) => {
    try {
        const resposta = await ProdutosDetalhes2();
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/admin/todasroupas/detalhes/3', async (req, resp) => {
    try {
        const resposta = await ProdutosDetalhes3();
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server;