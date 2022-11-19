import { deletarFavorito, listaDesejo, varificarSeJaFavoritou } from '../repository/desejoRepository.js';

import { Router } from 'express'
const server = Router();


server.post('/favorito/usuario/avaliacao', async (req, resp) => {
    try {
        const usid = req.body;
        console.log(usid)
        const verificar = await varificarSeJaFavoritou(usid.idUsuario, usid.idProduto);
        let produtosFav = '';
        if(!verificar || verificar === undefined || verificar === null || verificar === 0){
            produtosFav = await listaDesejo(usid);
        }
        else{
            throw new Error('Você já Favoritou esse produto');
        }
        resp.send({
            idFavorito: produtosFav
        });

    } catch (err) {
        resp.status(400).send({
            erro: (err.message)
        });
    }
})

server.delete('/favorito/usuario/deletar/:id/:prod', async (req,resp) => {
    try {
        const usid = req.params;
        const remover = await deletarFavorito(usid);
        let estado = 0
        if(remover == 1){
            estado = 204
        }
        resp.status(estado).send();
    } catch (err) {
        console.log(err);
        resp.status(400).send({
            erro: (err.message)
        });
    }
})

server.get('/verificar/favoritado/:usuario/:produto', async (req, resp) => {
    try {
        const usid = req.params;
        const verificar = await varificarSeJaFavoritou(usid.usuario, usid.produto);
        resp.send(verificar);

    } catch (err) {

        return resp.status(400).send({
            erro: (err.message)
        });
    }
})

export default server;