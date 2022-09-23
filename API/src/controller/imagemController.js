
import { Router } from 'express'
import { inserirImagem } from '../repository/imagemRepository.js';
import multer from 'multer'


const server = Router();
const upload = multer({dest: 'storage/fotoProduto'})


server.put('/roupa/:id/foto', upload.single('foto'), async (req,resp) => {
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
        console.log(err)

    }
       
})

export default server;
