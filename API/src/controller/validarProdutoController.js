import { Router } from 'express';

// import { inserirImagem } from '../repository/imagemRepository';
import { categoriaId, verCategoria } from '../repository/categoriarepository.js'
import { listarMarca, buscarMarcaPorId, salvarProdutoMarca} from '../repository/marcaRepository.js';
import { buscarModeloPorId, salvarProdutoModelo } from '../repository/modeloRepository.js'
import { listarTamanhos, buscarTamanhoPorId, salvarProdutoTamanho } from '../repository/tamanhoRepository.js'
import { salvarProduto, salvarProdutoCategoria } from '../repository/validarProdutoRepository.js';

const server = Router();



server.post('/admin/produto', async (req, resp) => {
    try {
        const produto = req.body;

        const idProduto = await salvarProduto(produto)

        // const idProduto = await salvarProduto(produto);


        for (const IdMarc in produto.IdMarca) {
            const mar = await buscarMarcaPorId(IdMarc);
            
            if (mar != undefined){
                await salvarProdutoMarca(idProduto, IdMarc);
            }
        }

        
        for (const idCateg in produto.idCategoria) {
            const cat = await categoriaId(idCateg);
            
            if (cat != undefined){
                await salvarProdutoCategoria(idProduto, idCateg);
            }
        }

        for (const IdModelo in produto.IdModelo) {
                const mod = await buscarModeloPorId(IdModelo);
            
            if (mod != undefined){
                await salvarProduto(idProduto, IdModelo);
            }
        }

        for (const IdTamanho in produto.IdTamanho) {
            const tam = await buscarTamanhoPorId(IdTamanho);
            
            if (tam != undefined){
                await salvarProdutoTamanho(idProduto, IdTamanho);
            }
        }

        resp.status(204).send("Produto Inserido");

    }
    
    catch (err) {
        // return resp.status(400).send({
        //     erro: err.message
        // })
        console.log(err);
    }
})


export default server;