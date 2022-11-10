import { buscarTamanhoPorId } from "../repository/tamanhoRepository.js";


export async function validarProduto(produto) {
    if (produto.nome == undefined || produto.nome == '') {
        throw new Error('Nome do produto é obrigatório!');
    }
    else if (isNaN(produto.preco) || produto.preco <= 0) {
        throw new Error('Preço do produto é obrigatório!');
    }
    else if (produto.complementoProduto == undefined) {
        throw new Error('Complemento é obrigatório!');
    }
    else if (isNaN(produto.parcela) || produto.parcela <= 0 || produto.parcela == undefined) {
        throw new Error('Parcela do produto é obrigatório!');
    }
    else if (isNaN(produto.juros) || produto.juros <= 0 || produto.juros == undefined) {
        throw new Error('Juros do produto é obrigatório!');
    }
    else if (isNaN(produto.disponivel) || produto.disponivel <= 0 || produto.disponivel == undefined) {
        throw new Error('Quantidade de peças Disponiveis do produto é obrigatório!');
    }
    else if (produto.cor == undefined) {
        throw new Error('Seleção de cor é obrigatoria!');
    }
    else if (produto.cor == undefined) {
        throw new Error('Seleção de cor é obrigatoria!');
    }
    else if (isNaN(produto.idModelo) || produto.idModelo <= 0 || produto.idModelo == undefined) {
        throw new Error('Modelo do produto é obrigatório!');
    }
    else if (isNaN(produto.idCategoria) || produto.idCategoria <= 0 || produto.idCategoria == undefined) {
        throw new Error('Categoria do produto é obrigatório!');
    }
    else if (isNaN(produto.idMarca) || produto.idMarca <= 0 || produto.idMarca == undefined) {
        throw new Error('Marca do produto é obrigatório!');
    }
    else if (produto.cor == undefined) {
        throw new Error('Seleção de cor é obrigatoria!');
    }

    const tam = await buscarTamanhoPorId(produto.tamanhos);
    if (tam == undefined) {
        throw new Error('Tamanho inválido');
    }

}