import { Router } from 'express';

// import { inserirImagem } from '../repository/imagemRepository';
import { categoriaId, verCategoria } from '../repository/categoriarepository.js'
import { listarMarca } from '../repository/marcaRepository.js';
import { buscarModeloPorId } from '../repository/modeloRepository.js'
import { listarTamanhos } from '../repository/tamanhoRepository.js'
import { salvarProduto } from '../repository/validarProdutoRepository.js';

const server = Router();



server.post('/admin/produto', async (req, resp) => {
    try {
        const Produto = req.body;

        await salvarProduto(Produto)

        const idProduto = await salvarProduto(Produto);


        
        for (const idCategoria of novoProduto.idCategoria) {
            const cat = await categoriaId(idCategoria);
            
            if (cat != undefined)
                await verCategoria(idProduto, idCategoria);
        }

        for (const IdModelo of novoProduto.IdModelo) {
                const mod = await buscarModeloPorId(IdModelo);
            
            if (mod != undefined)
                await listarModelos(idProduto, IdModelo);
        }
        for (const IdMarca of novoProduto.IdMarca) {
            const mar = await buscarMarcaPorId(IdMarca);
            
            if (mar != undefined)
                await listarMarca(idProduto, IdMarca);
        }

        for (const IdTamanho of novoProduto.IdTamanho) {
            const tam = await buscarTamanhoPorId(IdTamanho);
            
            if (tam != undefined)
                await listarTamanhos(idProduto, IdTamanho);
        }

        resp.status(204).send('Produto inserido');

    }
    
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;