
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

        console.log(id);
        console.log(imagem);

        const resposta = await inserirImagem(imagem, id);

        resp.status(204).send()

    } catch (err) {
        console.log(err)
    }
       
})

export default server;
