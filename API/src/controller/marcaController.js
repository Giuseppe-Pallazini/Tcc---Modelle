import { listarMarca } from "../repository/marcaRepository.js";


import { Router } from "express";
const server = Router();


server.get('/api/marca', async (req, resp) => {
    try {
        const linhas = await listarMarca();
        resp.send(linhas);
    }
    catch (err) {
        console.log(err)
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;