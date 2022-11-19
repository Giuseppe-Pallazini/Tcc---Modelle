import { listaDesejo, varificarSeJaFavoritou } from '../repository/desejoRepository';

import { Router } from 'express'
const server = Router();


server.post('/favorito/usuario/avaliacao', async (req, resp) => {
    try {
        const usid = req.body;
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

        return resp.status(400).send({
            erro: (err.message)
        });
    }
})

export default server;