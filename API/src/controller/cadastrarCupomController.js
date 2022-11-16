import CadastrarCupom from "../repository/cadastrarCupom.js";

import { Router } from "express";
import { validarCupom } from "../services/validarCupom.js";
const server = Router();

server.post('/cadastrar/cupom', async (req,resp) => {
    try {
        const cupom = req.body;
        await validarCupom(cupom);
        const cupomInserido = await  CadastrarCupom(cupom);
        resp.send({
            id: cupomInserido                              
        });
    } catch (err) {
        console.log(err)
        resp.status(400).send({
            erro: err.message
         });
    }

})

export default server;