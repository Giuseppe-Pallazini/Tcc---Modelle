import CadastrarUsuario from '../repository/cadastroUsuarioRepository.js';

 import { Router } from "express";
 const server = Router();

 server.post('/usuario/cadastro', async (req, resp) => {
     try {
       const novoUsuario = req.body;
        if(!novoUsuario.nome.trim())
          throw new Error('Seu nome é obrigatorio');
        if(novoUsuario.nome == "admin")
          throw new Error('Nome invalido');
        if(!novoUsuario.dtNascimento.trim())
          throw new Error('Sua data de nascimento é obrigatoria!');
        if(!novoUsuario.telefone.trim())
          throw new Error('Seu numero de telefone é obrigatorio!');
        if(!novoUsuario.email.trim())
          throw new Error('Seu email é obrigatorio!');
        if(!novoUsuario.senha.trim())
          throw new Error('Crie uma senha para você!');

        const usuarioInserido = await CadastrarUsuario(novoUsuario);
        resp.send(usuarioInserido);
     } catch (err) {
         resp.status(401).send({
            erro: err.message
         });
     }
 })

export default server;