import { removerProduto, removerProdutoCategoria, removerProdutoImagem, removerProdutoMarca, 
    removerProdutoModelo, removerProdutoTamanho } from '../repository/removerProdutoRepository.js'
    
    import { Router } from 'express'
    const server = Router();
    
    
    
    server.delete('/admin/produto/:id', async (req, resp) => {
        try {
            const id = req.params.id;
    
            // await removerProdutoCategoria(id);
            await removerProdutoImagem(id);
            // await removerProdutoMarca(id);
            // await removerProdutoModelo(id);
            await removerProdutoTamanho(id);
            await removerProduto(id);
    
            
            resp.status(204).send();
    
        } catch (err) {
            resp.status(400).send({
                erro: err.message
            })
        }
    })
    
    
    export default server;