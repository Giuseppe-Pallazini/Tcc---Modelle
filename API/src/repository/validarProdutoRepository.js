import { con } from './connection.js'

export async function salvarProduto(produto) {
    const comando = `
        insert into tb_produto (id_tamanho, id_modelo, nm_produto, nm_prod_complemento, 
                                vl_preco, ds_composicao, ds_detalhes, vl_juros, vl_parcela, ds_cor, id_marca, id_categoria )
                        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [resp] = await con.query(comando, [
                            produto.idTamanho,
                            produto.IdModelo,
                            produto.nome,
                            produto.complementoProduto,
                            produto.preco,
                            produto.composicao,
                            produto.detalhes,
                            produto.juros,
                            produto.parcela,
                            produto.cor,
                            produto.idMarca,
                            produto.idCategoria
                        ])
    return resp.insertId;
}



export async function salvarProdutoCategoria(idProduto, idCategoria) {
    const comando = `
        insert into tb_produto_categoria (id_categoria, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idCategoria, idProduto]);
}


export async function salvarProdutoMarca(idProduto, idMarca) {
    const comando = `
        insert into tb_produto_marca (id_produto, id_marca)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, idMarca])
}

export async function salvarProdutoModelo(idProduto, Idmodelo) {
    const comando = `
        insert into tb_produto_modelo (id_produto, id_modelo)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, Idmodelo])
}

export async function salvarProdutoTamanho(idProduto, idTamanho) {
    const comando = `
        insert into tb_produto_tamanho (id_produto, id_tamanho)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, idTamanho])
}


export async function salvarProdutoImagem(idProduto, idImg) {
    const comando = `
        insert into tb_produto_imagem (id_produto, id_img)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, idImg])
}