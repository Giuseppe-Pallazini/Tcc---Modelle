
import { Router } from 'express'
import { inserirImagem } from '../repository/imagemRepository.js';
import multer from 'multer'
import { salvarProdutoImagem } from '../repository/validarProdutoRepository.js';


const server = Router();
const upload = multer({ dest: 'storage/fotoProduto' });


server.put('/roupa/:id/imagens', upload.array('imagens'), async (req,resp) => {
    try {
        if (!req.file){
            throw new Error('A imagem não pôde ser salva.')
        }
            
        const id = req.params.id;
        const imagens = req.files;

        console.log(id);
        console.log(imagem);

        for(const imagem of imagens){
            await salvarProdutoImagem(imagem.path, id);
        }

        resp.status(204).send()

    } catch (err) {
        console.log(err)
    }
       
})

export default server;
