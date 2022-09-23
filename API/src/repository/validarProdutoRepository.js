import { con } from './connection.js'

export async function salvarProduto(produto) {
    const comando = `
        insert into tb_produto (id_produto, id_tamanho, id_modelo, id_img, nm_produto, nm_produto_complemento, 
                                vl_preço, ds_composicao, ds_detalhes, vl_juros, vl_parcela, ds_cor, id_marca, id_categoria )
                        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [resp] = await con.query(comando, [
                            produto.idProduto,
                            produto.idTamanho,
                            produto.IdModelo,
                            produto.idImg,
                            produto.nome,
                            produto.complementoProduto,
                            produto.preco,
                            produto.coposicao,
                            produto.detalhes,
                            produto.juros,
                            produto.parcela,
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

    const [resp] = await con.query(comando, [idCategoria, idProduto])
}


export async function salvarProdutoMarca(idProduto, idMarca) {
    const comando = `
        insert into tb_produto_categoria (id_produto, id_marca)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, idMarca])
}

export async function salvarProdutoModelo(idProduto, Idmodelo) {
    const comando = `
        insert into tb_produto_categoria (id_produto, id_modelo)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, Idmodelo])
}

export async function salvarProdutoTamanho(idProduto, idTamanho) {
    const comando = `
        insert into tb_produto_categoria (id_produto, id_tamanho)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, idTamanho])
}


export async function salvarProdutoModelo(idProduto, idImg) {
    const comando = `
        insert into tb_produto_categoria (id_produto, id_img)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, idImg])
}