import { buscarMarcaBalenciaga, buscarMarcaBurberry, buscarMarcaDolceGabanna, buscarMarcaGucci, buscarMarcaKenzo, buscarMarcaLouisVuitton, buscarMarcaModelle, buscarMarcaMorley, buscarMarcaPrada, buscarMarcaVersace, buscarMarcaZegna } from "../repository/filtroMasculino.js";

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
export default server;
