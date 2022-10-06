import multer from 'multer'
import { Router } from 'express';

import { categoriaId, verCategoria } from '../repository/categoriarepository.js'
import { listarTamanhos, buscarTamanhoPorId, salvarProdutoTamanho } from '../repository/tamanhoRepository.js'
import { buscarPorNome, listarTodosProdutos, salvarProduto, salvarProdutoCategoria, salvarProdutoImagem } from '../repository/validarProdutoRepository.js';
import { ListarTodosProdutosPorId, ListarTodosTamanhosporId, ListarTodosImagensporId  } from '../repository/mostrarprodutorepository.js'

const server = Router();
const upload = multer({ dest: '/storage/fotoProduto' })


server.post('/admin/produto', async (req, resp) => {
    try {
        const produto = req.body;
        const idProduto = await salvarProduto(produto)

        for (const IdTamanho of produto.tamanhos) {
            const tam = await buscarTamanhoPorId(IdTamanho);

            if (tam != undefined) {
                await salvarProdutoTamanho(idProduto, IdTamanho);
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

server.put('/admin/produto/:id', upload.array('imagens'), async (req, resp) => {
    try {
        const id = req.params.id;
        const imagens = req.files;

        for (const imagem of imagens) {
            await salvarProdutoImagem(id, imagem.path)
        }

        resp.status(204).send();

    } catch (err) {
        resp.status(204).send({
            erro: err.message
        })
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
        const tamanhos = await ListarTodosTamanhosporId(id);
        const imagens = await ListarTodosImagensporId(id);

        resp.send({
            info: produto,
            tamanhos: tamanhos,
            imagens: imagens
    })

    }
    catch(err){
        console.log(err)
    }
}
)

export default server;