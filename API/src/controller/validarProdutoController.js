import { Router } from 'express';

import { salvarProduto } from '../repository/validarProdutoRepository';
import { inserirImagem } from '../repository/imagemRepository';
import { categoriaId, verCategoria } from '../repository/categoriarepository'
import { listarMarca } from '../repository/marcaRepository';
import { buscarModeloPorId } from '../repository/modeloRepository'
import { listarTamanhos } from '../repository/tamanhoRepository'
import { validarProduto } from '../service/produtoValidacao.js';

const server = Router();



server.post('/admin/produto', async (req, resp) => {
    try {
        const novoProduto = req.body;

        const idProduto = await (novoProduto);
        
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
        
        const produtoInserido = await salvarProduto(novoProduto);

        resp.status(204).send('Produto inserido');
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})



export default server;