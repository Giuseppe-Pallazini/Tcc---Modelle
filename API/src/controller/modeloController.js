import { listarModelos } from "../repository/modeloRepository.js";

import { Router } from "express";
const server = Router();


server.get('/api/modelo', async (req, resp) => {
    try {
        const linhas = await listarModelos();
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