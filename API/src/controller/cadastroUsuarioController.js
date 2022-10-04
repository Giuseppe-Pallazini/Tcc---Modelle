import CadastrarUsuario from '../repository/cadastroUsuarioRepository.js';

 import { Router } from "express";
 const server = Router();

 server.post('/usuario/cadastro', async (req, resp) => {
     try {
       const novoUsuario = req.body;

         const usuarioInserido = await CadastrarUsuario(novoUsuario);
        resp.send(usuarioInserido);
     } catch (err) {
         resp.status(401).send({
            erro: err.message
         });
     }
 })

export default server;