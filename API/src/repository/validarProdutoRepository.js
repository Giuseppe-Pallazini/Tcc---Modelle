import { con } from './connection.js'

export async function salvarProduto(produto) {
    const comando = `
        insert into tb_produto (id_tamanho, id_modelo, nm_produto, nm_prod_complemento, 
                                vl_preco, ds_composicao, ds_detalhes, vl_juros, vl_parcela, ds_cor, id_marca, id_categoria )
                        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [resp] = await con.query(comando, [
                            produto.idTamanho,
                            produto.idModelo,
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

export async function listarTodosProdutos() {
    const comando =
        `select tb_produto.id_produto, tb_produto.nm_produto, tb_produto.nm_prod_complemento, tb_produto.vl_preco, tb_produto.ds_cor, tb_modelo.nm_modelo
		, tb_categoria.nm_categoria, tb_tamanho.nm_tamanho, tb_marca.nm_marca
            from tb_produto

            inner join tb_modelo
            on tb_modelo.id_modelo = tb_produto.id_produto
            inner join tb_categoria
            on tb_categoria.id_categoria = tb_produto.id_produto
            inner join tb_tamanho
            on tb_tamanho.id_tamanho = tb_produto.id_produto
            inner join tb_marca
            on tb_marca.id_marca = tb_produto.id_produto`

    const [linhas] = await con.query(comando);
    return linhas;
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



export async function buscarPorNome(nome) {
    const comando =
        `select 	id_produto    	id,
        id_tamanho    			tamanho,
        id_modelo     			modelo,
        nm_produto    			nome,
        nm_prod_complemento  	complementoProduto,
        vl_preco			    preco,
        ds_composicao			composicao,
        ds_detalhes				detalhes,
        vl_juros				juros,
        vl_parcela				parcela,
        ds_cor					cor,
        id_marca				marca,
        id_categoria			categoria
        from tb_produto
	    where nm_produto    like ?
        `

    const [linhas] = await con.query(comando, [`%${nome}%`]);
    return linhas;
}