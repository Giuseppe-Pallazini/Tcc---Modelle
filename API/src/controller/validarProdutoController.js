import multer from 'multer'
import { Router } from 'express';

import { categoriaId, verCategoria } from '../repository/categoriarepository.js'
import { listarTamanhos, buscarTamanhoPorId, salvarProdutoTamanho, buscarTamanhoPorIdAdmin } from '../repository/tamanhoRepository.js'
import { alterarProduto, buscarMarcaGucci, buscarPedidoPorId, buscarPorNome, listarPedidos, listarProdutosFemininos, listarProdutosMasculino, listarTodosProdutos, removerProdutoImagensDiferentes, salvarProduto, salvarProdutoCategoria, salvarProdutoImagem } from '../repository/validarProdutoRepository.js';
import { ListarTodosProdutosPorId, ListarTodosTamanhosporId, ListarTodosImagensporId, ListarTodosTamanhosporIdUser, ListarTodosTamanhosporIdAdmin  } from '../repository/mostrarprodutorepository.js'
import { removerProdutoImagem, removerProdutoTamanho } from '../repository/removerProdutoRepository.js';
import { validarProduto } from '../services/ProdutoValidacao.js';

const server = Router();
const upload = multer({ dest: 'storage/fotoProduto' })


server.post('/admin/produto', async (req, resp) => {
    try {
        const produto = req.body;

        await validarProduto(produto);

        const idProduto = await salvarProduto(produto)

        for (const idTamanho of produto.tamanhos) {
            const tam = await buscarTamanhoPorIdAdmin(idTamanho);

            if (tam != undefined) {
                await salvarProdutoTamanho(idProduto, idTamanho);
            }
        }

        resp.send({
            id: idProduto                                   
        });

    }

    catch (err) {
        console.log(err)
        return resp.status(400).send({
            erro: err.message
        })

    }
})

server.put('/admin/produto/:id/imagem', upload.array('imagens'), async (req, resp) => {
    try {
        const id = req.params.id;
        const imagens = req.files;

        const imagensPermanecem = [];
        if (req.body.imagens){
            imagensPermanecem = req.body.imagens.filter(item => item != 'undefined');
        }

        if (imagensPermanecem.length > 0)
            await removerProdutoImagensDiferentes(imagensPermanecem);
        else
            await removerProdutoImagem(id);

        for (const imagem of imagens) {
            await salvarProdutoImagem(id, imagem.path)
        }

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
        console.log(err)
    }

})


server.get('/produto/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        const resposta = await buscarPorNome(nome);

        if (!resposta) {
            throw new Error('Produto não localizado.')
        }
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/admin/produto/:id', async (req, resp) => {
    try{
        const id = req.params.id;

        const produto =  await ListarTodosProdutosPorId(id);
        const tamanho = await ListarTodosTamanhosporIdAdmin(id);
        const imagens = await ListarTodosImagensporId(id);

        resp.send({
            info: produto,
            tamanho: tamanho,
            imagens: imagens
    })

    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
        console.log(err)
    }
}
)

server.get('/produto/:id', async (req, resp) => {
    try{
        const id = req.params.id;

        const produto =  await ListarTodosProdutosPorId(id);
        const tamanho = await ListarTodosTamanhosporId(id);
        const imagens = await ListarTodosImagensporId(id);

        resp.send({
            info: produto,
            tamanho: tamanho,
            imagens: imagens
    })

    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
        console.log(err)
    }
}
)

server.put('/admin/produto/:id', async (req, resp) => {
    try{
        const id = req.params.id;
        const produto = req.body;
        const imagens = req.files;

        console.log(id);
        console.log(produto);
        console.log(imagens);
    

        // Remover tamanhos
        await removerProdutoTamanho(id);

        await alterarProduto(id, produto)

        for(let idTam of produto.tamanhos){
            const tam = buscarTamanhoPorIdAdmin(idTam);

            if(tam != undefined){
                await salvarProdutoTamanho(id, idTam)
            }
        }
    
        resp.status(204).send()
    }
    
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
        console.log(err)
    }
}
)

server.get('/api/produto/:id', async (req, resp) => {
    try{
        const id = req.params.id;

        const produto =  await ListarTodosProdutosPorId(id);
        const tamanho = await ListarTodosTamanhosporIdUser(id);
        const imagens = await ListarTodosImagensporId(id);
        

        resp.send({
            info: produto,
            tamanho: tamanho,
            imagens: imagens
    })

    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
        console.log(err)
    }
}
)

//Filtragem Cabeçalho user

server.get('/api/filtro/masculino', async (req, resp) => {
    try {
        const x = await listarProdutosMasculino();
        resp.send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/filtro/feminino', async (req, resp) => {
    try {
        const x = await listarProdutosFemininos();
        resp.send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/listarPedidos', async (req, resp) => {
    try {
        const x = await listarPedidos();
        resp.send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/listarPedidos/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const x = await buscarPedidoPorId(id);
        resp.send(x);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;
