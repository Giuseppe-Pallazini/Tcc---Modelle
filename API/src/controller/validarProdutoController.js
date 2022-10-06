import multer from 'multer'
import { Router } from 'express';

import { categoriaId, verCategoria } from '../repository/categoriarepository.js'
import { buscarModeloPorId, salvarProdutoModelo } from '../repository/modeloRepository.js'
import { listarTamanhos, buscarTamanhoPorId, salvarProdutoTamanho } from '../repository/tamanhoRepository.js'
import { buscarPorNome, listarTodosProdutos, salvarProduto, salvarProdutoCategoria, salvarProdutoImagem } from '../repository/validarProdutoRepository.js';
import { con } from '../repository/connection.js';


const server = Router();
const upload = multer({ dest: '/storage/fotoProduto' })


server.post('/admin/produto', async (req, resp) => {
    try {
        const produto = req.body;

        const idProduto = await salvarProduto(produto)
        console.log('Tam ' + produto.tamanhos)
        console.log('Modelo ' + produto.modelos)
        console.log('Cat ' + produto.categorias)

        for (const idCateg of produto.categorias) {
            const cat = await categoriaId(idCateg);

            if (cat != undefined) {
                await salvarProdutoCategoria(idProduto, idCateg);
            }
        }

        for (const IdModelo of produto.modelos) {
            const mod = await buscarModeloPorId(IdModelo);

            if (mod != undefined) {
                await salvarProdutoModelo(idProduto, IdModelo);
            }
        }

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

export default server;