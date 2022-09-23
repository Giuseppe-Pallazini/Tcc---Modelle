
import { Router } from 'express'
import { inserirImagem } from '../repository/imagemRepository.js';
const server = Router();


server.update('/api/:id/roupa', upload.single('img'), async (req,resp) => {
    try {
        if (!req.file)
            throw new Error('A imagem não pôde ser salva.')

        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await inserirImagem(imagem, id);
        if (resposta != 1)
            throw new Error ('A imagem não pôde ser salva.')

        resp.status(204).send()

    } catch (err) {
        resp.status(401).send({
            erro: err.message
                
        })}
})

export default server;
