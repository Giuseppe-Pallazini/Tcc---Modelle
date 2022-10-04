import { con } from './connection.js'

export async function salvarProduto(produto) {
    const comando = `
        insert into tb_produto (nm_produto, nm_prod_complemento, 
                                vl_preco, ds_composicao, ds_detalhes, vl_juros, vl_parcela, ds_cor)
                        values (?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [resp] = await con.query(comando, [
        produto.nome,
        produto.complementoProduto,
        produto.preco,
        produto.composicao,
        produto.detalhes,
        produto.juros,
        produto.parcela,
        produto.cor
    ])
    return resp.insertId;
}

export async function listarTodosProdutos() {
    const comando =
        `	select tb_produto.id_produto as produto, 
        nm_produto as nome,
        nm_prod_complemento as complementoProduto,
        vl_preco as preco,
        ds_cor as cor,
        nm_modelo as idModelo,
        nm_categoria as idCategoria,
        nm_tamanho as idTamanho,
        nm_marca as idMarca
    from tb_produto

    inner join tb_modelo
    on tb_modelo.id_modelo = tb_produto.id_modelo
    inner join tb_categoria
    on tb_produto.id_categoria = tb_categoria.id_categoria
    inner join tb_tamanho
    on tb_produto.id_tamanho = tb_tamanho.id_tamanho
    inner join tb_marca
    on tb_produto.id_marca = tb_marca.id_marca
    
        group by id_produto, 
            nm_produto,
            nm_prod_complemento,
            vl_preco,
            ds_cor,
            nm_modelo,
            nm_categoria,
            nm_tamanho,
            nm_marca`

    const [linhas] = await con.query(comando);
    return linhas;
}



export async function salvarProdutoCategoria(idProduto, idCategoria) {
    const comando = `
        insert into tb_produto_categoria (id_produto, id_categoria)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, idCategoria]);
    return resp.affectedRows
}


export async function salvarProdutoMarca(idProduto, idMarca) {
    const comando = `
        insert into tb_produto_marca (id_produto, id_marca)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, idMarca]);
    return resp.affectedRows
}



export async function salvarProdutoModelo(idProduto, Idmodelo) {
    const comando = `
        insert into tb_produto_modelo (id_produto, id_modelo)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, Idmodelo])
    return resp.affectedRows
}

export async function salvarProdutoTamanho(idProduto, idTamanho) {
    const comando = `
        insert into tb_produto_tamanho (id_produto, id_tamanho)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, idTamanho])
    return resp.affectedRows;
}


export async function salvarProdutoImagem(idProduto, imagemPath) {
    const comando = `
        insert into tb_produto_imagem (id_produto, ds_img)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, imagemPath])
}



export async function buscarPorNome(nome) {
    const comando =
        `	select tb_produto.id_produto as produto, 
        nm_produto as nome,
        nm_prod_complemento as complementoProduto,
        vl_preco as preco,
        ds_cor as cor,
        nm_modelo as idModelo,
        nm_categoria as idCategoria,
        nm_tamanho as idTamanho,
        nm_marca as idMarca
    from tb_produto

    inner join tb_modelo
    on tb_modelo.id_modelo = tb_produto.id_modelo
    inner join tb_categoria
    on tb_produto.id_categoria = tb_categoria.id_categoria
    inner join tb_tamanho
    on tb_produto.id_tamanho = tb_tamanho.id_tamanho
    inner join tb_marca
    on tb_produto.id_marca = tb_marca.id_marca
    
            where nm_produto    like ?
    
        group by id_produto, 
            nm_produto,
            nm_prod_complemento,
            vl_preco,
            ds_cor,
            nm_modelo,
            nm_categoria,
            nm_tamanho,
            nm_marca
        `

    const [linhas] = await con.query(comando, [`%${nome}%`]);
    return linhas;
}