import { Router } from "express";
import { buscarFemininoMarcaBalenciaga, buscarFemininoMarcaBurberry, buscarFemininoMarcaDolceGabanna, buscarFemininoMarcaGucci, buscarFemininoMarcaKenzo, buscarFemininoMarcaLouisVuitton, buscarFemininoMarcaModelle, buscarFemininoMarcaMorley, buscarFemininoMarcaPrada, buscarFemininoMarcaVersace, buscarFemininoMarcaZegna, buscarFemininoModeloBermuda, buscarFemininoModeloBlusa, buscarFemininoModeloCalca, buscarFemininoModeloCamisa, buscarFemininoModeloCasaco, buscarFemininoModeloMoletom, buscarFemininoModeloPolo, buscarFemininoModeloSueter, buscarFemininoTamanhoG, buscarFemininoTamanhoGG, buscarFemininoTamanhoM, buscarFemininoTamanhoP, buscarFemininoTamanhoPP } from "../repository/filtroFeminino.js";
const server = Router();


server.get('/api/feminino/marca/gucci', async (req,resp) => {
    try {
        const x = await buscarFemininoMarcaGucci();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/marca/balenciaga', async (req,resp) => {
    try {
        const x = await buscarFemininoMarcaBalenciaga();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/marca/dolcegabanna', async (req,resp) => {
    try {
        const x = await buscarFemininoMarcaDolceGabanna();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/marca/burberry', async (req,resp) => {
    try {
        const x = await buscarFemininoMarcaBurberry();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/marca/morley', async (req,resp) => {
    try {
        const x = await buscarFemininoMarcaMorley();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/marca/kenzo', async (req,resp) => {
    try {
        const x = await buscarFemininoMarcaKenzo();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/marca/modelle', async (req,resp) => {
    try {
        const x = await buscarFemininoMarcaModelle();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/marca/zegna', async (req,resp) => {
    try {
        const x = await buscarFemininoMarcaZegna();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/marca/louisvuitton', async (req,resp) => {
    try {
        const x = await buscarFemininoMarcaLouisVuitton();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/marca/versace', async (req,resp) => {
    try {
        const x = await buscarFemininoMarcaVersace();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/marca/prada', async (req,resp) => {
    try {
        const x = await buscarFemininoMarcaPrada();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/tamanho/pp', async (req,resp) => {
    try {
        const x = await buscarFemininoTamanhoPP();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/tamanho/p', async (req,resp) => {
    try {
        const x = await buscarFemininoTamanhoP();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/tamanho/m', async (req,resp) => {
    try {
        const x = await buscarFemininoTamanhoM();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/tamanho/g', async (req,resp) => {
    try {
        const x = await buscarFemininoTamanhoG();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/tamanho/gg', async (req,resp) => {
    try {
        const x = await buscarFemininoTamanhoGG();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/tamanho/gg', async (req,resp) => {
    try {
        const x = await buscarFemininoTamanhoGG();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/modelo/camisa', async (req,resp) => {
    try {
        const x = await buscarFemininoModeloCamisa();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/modelo/calca', async (req,resp) => {
    try {
        const x = await buscarFemininoModeloCalca();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/modelo/moletom', async (req,resp) => {
    try {
        const x = await buscarFemininoModeloMoletom();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/modelo/casaco', async (req,resp) => {
    try {
        const x = await buscarFemininoModeloCasaco();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/modelo/bermuda', async (req,resp) => {
    try {
        const x = await buscarFemininoModeloBermuda();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/modelo/polo', async (req,resp) => {
    try {
        const x = await buscarFemininoModeloPolo();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/modelo/polo', async (req,resp) => {
    try {
        const x = await buscarFemininoModeloPolo();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/modelo/sueter', async (req,resp) => {
    try {
        const x = await buscarFemininoModeloSueter();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/feminino/modelo/blusa', async (req,resp) => {
    try {
        const x = await buscarFemininoModeloBlusa();
        resp.status(200).send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;