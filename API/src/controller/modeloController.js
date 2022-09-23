import { listarModelos } from "../repository/modeloRepository.js";

import { Router } from "express";
const server = Router();


server.get('/admin/cadastrar/modelo', async (req, resp) => {
    try {
        const linhas = await listarModelos();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;