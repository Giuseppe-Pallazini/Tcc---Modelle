import { Router } from "express";
import { buscarTodosMarcaBalenciaga, buscarTodosMarcaBurberry, buscarTodosMarcaDolceGabanna, buscarTodosMarcaGucci, buscarTodosMarcaKenzo, buscarTodosMarcaLouisVuitton, buscarTodosMarcaModelle, buscarTodosMarcaMorley, buscarTodosMarcaPrada, buscarTodosMarcaVersace, buscarTodosMarcaZegna, buscarTodosModeloBermuda, buscarTodosModeloBlusa, buscarTodosModeloCalca, buscarTodosModeloCamisa, buscarTodosModeloCasaco, buscarTodosModeloMoletom, buscarTodosModeloPolo, buscarTodosModeloSueter, buscarTodosTamanhoG, buscarTodosTamanhoGG, buscarTodosTamanhoM, buscarTodosTamanhoP, buscarTodosTamanhoPP } from "../repository/filtroNovidades.js";
const server = Router();


server.get('/api/Todos/marca/gucci', async (req,resp) => {
    try {
        const x = await buscarTodosMarcaGucci();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/marca/balenciaga', async (req,resp) => {
    try {
        const x = await buscarTodosMarcaBalenciaga();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/marca/dolcegabanna', async (req,resp) => {
    try {
        const x = await buscarTodosMarcaDolceGabanna();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/marca/burberry', async (req,resp) => {
    try {
        const x = await buscarTodosMarcaBurberry();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/marca/morley', async (req,resp) => {
    try {
        const x = await buscarTodosMarcaMorley();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/marca/kenzo', async (req,resp) => {
    try {
        const x = await buscarTodosMarcaKenzo();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/marca/modelle', async (req,resp) => {
    try {
        const x = await buscarTodosMarcaModelle();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/marca/zegna', async (req,resp) => {
    try {
        const x = await buscarTodosMarcaZegna();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/marca/louisvuitton', async (req,resp) => {
    try {
        const x = await buscarTodosMarcaLouisVuitton();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/marca/versace', async (req,resp) => {
    try {
        const x = await buscarTodosMarcaVersace();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/marca/prada', async (req,resp) => {
    try {
        const x = await buscarTodosMarcaPrada();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/tamanho/pp', async (req,resp) => {
    try {
        const x = await buscarTodosTamanhoPP();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/tamanho/p', async (req,resp) => {
    try {
        const x = await buscarTodosTamanhoP();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/tamanho/m', async (req,resp) => {
    try {
        const x = await buscarTodosTamanhoM();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/tamanho/g', async (req,resp) => {
    try {
        const x = await buscarTodosTamanhoG();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/tamanho/gg', async (req,resp) => {
    try {
        const x = await buscarTodosTamanhoGG();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/api/Todos/modelo/camisa', async (req,resp) => {
    try {
        const x = await buscarTodosModeloCamisa();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/modelo/calca', async (req,resp) => {
    try {
        const x = await buscarTodosModeloCalca();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/modelo/moletom', async (req,resp) => {
    try {
        const x = await buscarTodosModeloMoletom();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/modelo/casaco', async (req,resp) => {
    try {
        const x = await buscarTodosModeloCasaco();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/modelo/bermuda', async (req,resp) => {
    try {
        const x = await buscarTodosModeloBermuda();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/modelo/polo', async (req,resp) => {
    try {
        const x = await buscarTodosModeloPolo();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/modelo/sueter', async (req,resp) => {
    try {
        const x = await buscarTodosModeloSueter();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/Todos/modelo/blusa', async (req,resp) => {
    try {
        const x = await buscarTodosModeloBlusa();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;