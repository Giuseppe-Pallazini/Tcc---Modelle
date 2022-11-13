import { buscarMarcaBalenciaga, buscarMarcaBurberry, buscarMarcaDolceGabanna, buscarMarcaGucci, buscarMarcaKenzo, buscarMarcaLouisVuitton, buscarMarcaModelle, buscarMarcaMorley, buscarMarcaVersace, buscarMarcaZegna, buscarMarcaPrada ,buscarTamanhoG, buscarTamanhoGG, buscarTamanhoM, buscarTamanhoP, buscarTamanhoPP, buscarModeloCamisa, buscarModeloCalca, buscarModeloMoletom, buscarModeloCasaco, buscarModeloBermuda, buscarModeloPolo, buscarModeloSueter, buscarModeloBlusa } from "../repository/filtroMasculino.js";

import { Router } from "express";
const server = Router();

server.get('/api/filtro/marca/gucci', async (req, resp) => {
    try {
        const x = await buscarMarcaGucci();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/marca/balenciaga', async (req, resp) => {
    try {
        const x = await buscarMarcaBalenciaga();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/marca/dolcegabanna', async (req, resp) => {
    try {
        const x = await buscarMarcaDolceGabanna();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/marca/burberry', async (req, resp) => {
    try {
        const x = await buscarMarcaBurberry();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/marca/morley', async (req, resp) => {
    try {
        const x = await buscarMarcaMorley();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/marca/kenzo', async (req, resp) => {
    try {
        const x = await buscarMarcaKenzo();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/marca/modelle', async (req, resp) => {
    try {
        const x = await buscarMarcaModelle();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/marca/zegna', async (req, resp) => {
    try {
        const x = await buscarMarcaZegna();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/marca/louisvuitton', async (req, resp) => {
    try {
        const x = await buscarMarcaLouisVuitton();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/marca/versace', async (req, resp) => {
    try {
        const x = await buscarMarcaVersace();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/marca/prada', async (req, resp) => {
    try {
        const x = await buscarMarcaPrada();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/tamanho/pp', async (req, resp) => {
    try {
        const x = await buscarTamanhoPP();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/tamanho/p', async (req, resp) => {
    try {
        const x = await buscarTamanhoP();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/tamanho/m', async (req, resp) => {
    try {
        const x = await buscarTamanhoM();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/tamanho/g', async (req, resp) => {
    try {
        const x = await buscarTamanhoG();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/tamanho/gg', async (req, resp) => {
    try {
        const x = await buscarTamanhoGG();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/modelo/camisa', async (req, resp) => {
    try {
        const x = await buscarModeloCamisa();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/modelo/calca', async (req, resp) => {
    try {
        const x = await buscarModeloCalca();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/modelo/moletom', async (req, resp) => {
    try {
        const x = await buscarModeloMoletom();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/modelo/casaco', async (req, resp) => {
    try {
        const x = await buscarModeloCasaco();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/modelo/bermuda', async (req, resp) => {
    try {
        const x = await buscarModeloBermuda();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})  

server.get('/api/filtro/modelo/polo', async (req, resp) => {
    try {
        const x = await buscarModeloPolo();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/modelo/sueter', async (req, resp) => {
    try {
        const x = await buscarModeloSueter();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/modelo/blusa', async (req, resp) => {
    try {
        const x = await buscarModeloBlusa();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;
