import { verCategoria } from "../repository/categoriarepository.js";

import { Router } from "express";
const server = Router();


server.get('/admin/cadastrar/categoria', async (req, resp) => {
    try {
        const linhas = await verCategoria();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;