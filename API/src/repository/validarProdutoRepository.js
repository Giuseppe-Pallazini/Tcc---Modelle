import { con } from './connection.js'

// export async function salvarProduto(produto) {
//     const comando = `
//         insert into tb_produto (nm_produto, nm_prod_complemento, 
//                                 vl_preco, ds_composicao, ds_detalhes, vl_juros, vl_parcela, ds_cor)
//                         values (?, ?, ?, ?, ?, ?, ?, ?)
//     `

//     const [resp] = await con.query(comando, [
//         produto.nome,
//         produto.complementoProduto,
//         produto.preco,
//         produto.composicao,
//         produto.detalhes,
//         produto.juros,
//         produto.parcela,
//         produto.cor
//     ])
//     return resp.insertId;
// }

export async function salvarProduto(produto) {
    const comando = `
        insert into tb_produto (nm_produto, nm_prod_complemento, 
                                vl_preco, ds_composicao, ds_detalhes, vl_juros, vl_parcela, vl_disponivel, ds_cor, id_marca, id_modelo, id_categoria)
                        values (?, ?, ?, ? ,? ,? ,? ,? ,? ,?, ?, ?)
    `

    const [resp] = await con.query(comando, [
        produto.nome,
        produto.complementoProduto,
        produto.preco,
        produto.composicao,
        produto.detalhes,
        produto.juros,
        produto.parcela,
        produto.disponivel,
        produto.cor,
        produto.idMarca,
        produto.idModelo,
        produto.idCategoria
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
        nm_marca as idMarca,
        ds_imagem as imagem
    from tb_produto
    inner join tb_modelo
    on tb_modelo.id_modelo = tb_produto.id_modelo
    inner join tb_categoria
    on tb_produto.id_categoria = tb_categoria.id_categoria
    inner join tb_tamanho
    on tb_produto.id_tamanho = tb_tamanho.id_tamanho
    inner join tb_marca
    on tb_produto.id_marca = tb_marca.id_marca

    inner join tb_produto_imagem
    on tb_produto_imagem.id_produto_imagem = tb_produto.id_produto
    
    

    
        group by id_produto, 
            nm_produto,
            nm_prod_complemento,
            vl_preco,
            ds_cor,
            nm_modelo,
            nm_categoria,
            nm_marca,
            ds_imagem
            ;`

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
        insert into tb_produto_imagem (id_produto, ds_imagem)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, imagemPath]);
}

export async function removerProdutoImagensDiferentes(imagens) {
    const comando = `
        delete from tb_produto_imagem 
              where ds_imagem NOT IN (?)
    `

    const [resp] = await con.query(comando, [imagens])
    return resp.affectedRows;
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
        count(nm_tamanho) as idTamanho,
        nm_marca as idMarca,
        vl_disponivel as disponibilidade,
        ds_imagem
 from tb_produto
 
 inner join tb_modelo
 on tb_modelo.id_modelo = tb_produto.id_modelo
 inner join tb_categoria
 on tb_categoria.id_categoria = tb_produto.id_categoria
 inner join tb_produto_tamanho
 on tb_produto_tamanho.id_produto = tb_produto.id_produto
 inner join tb_tamanho
 on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
 inner join tb_produto_imagem
 on tb_produto_imagem.id_produto = tb_produto.id_produto


 inner join tb_marca
 on tb_marca.id_marca = tb_produto.id_marca

 where nm_produto like ?
 
 group by tb_produto.id_produto,
        nm_produto,
        nm_prod_complemento,
        vl_preco,
        ds_cor,
        nm_modelo,
        nm_categoria,
        nm_marca,
        vl_disponivel
        `

    const [linhas] = await con.query(comando, [`%${nome}%`]);
    return linhas;
}


export async function buscarPorId(Id) {
    const comando =
        `	select tb_produto.id_produto as produto,
        nm_produto as nome,
        nm_prod_complemento as complementoProduto,
        vl_preco as preco,
        ds_cor as cor,
        nm_modelo as idModelo,
        nm_categoria as idCategoria,
        count(nm_tamanho) as idTamanho,
        nm_marca as idMarca,
        vl_disponivel as disponibilidade,
        ds_imagem
 from tb_produto
 
 inner join tb_modelo
 on tb_modelo.id_modelo = tb_produto.id_modelo
 inner join tb_categoria
 on tb_categoria.id_categoria = tb_produto.id_categoria
 inner join tb_produto_tamanho
 on tb_produto_tamanho.id_produto = tb_produto.id_produto
 inner join tb_tamanho
 on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
 inner join tb_produto_imagem
 on tb_produto_imagem.id_produto = tb_produto.id_produto


 inner join tb_marca
 on tb_marca.id_marca = tb_produto.id_marca

 where nm_produto like ?
 
 group by tb_produto.id_produto,
        nm_produto,
        nm_prod_complemento,
        vl_preco,
        ds_cor,
        nm_modelo,
        nm_categoria,
        nm_marca,
        vl_disponivel
        `

    const [linhas] = await con.query(comando, [`%${Id}%`]);
    return linhas;
}

export async function alterarProduto(id, produto) {
    const comando = `
            update tb_produto
            set nm_produto = ?,
                nm_prod_complemento = ?,
                vl_preco = ?,
                ds_composicao = ?,
                ds_detalhes = ?,
                vl_juros = ?,
                vl_parcela = ?,
                vl_disponivel = ?,
                ds_cor = ?,
                id_marca = ?,
                id_modelo = ?,
                id_categoria = ?
            where id_produto = ?
    `

    const [resp] = await con.query(comando, [
        produto.nome,
        produto.complementoProduto,
        produto.preco,
        produto.composicao,
        produto.detalhes,
        produto.juros,
        produto.parcela,
        produto.disponivel,
        produto.cor,
        produto.idMarca,
        produto.idModelo,
        produto.idCategoria,
        id
    ])

    return resp.affectedRows;
}

//Filtros

export async function listarProdutosMasculino() {
    const comando =
        `	select tb_produto.id_produto as produto,
        nm_produto as nome,
        nm_prod_complemento as complementoProduto,
        vl_preco as preco,
        ds_cor as cor,
        nm_modelo as idModelo,
        nm_categoria as idCategoria,
        count(nm_tamanho) as idTamanho,
        nm_marca as idMarca,
        vl_disponivel as disponibilidade,
        ds_imagem
        from tb_produto
    
        inner join tb_modelo
        on tb_modelo.id_modelo = tb_produto.id_modelo
        inner join tb_categoria
        on tb_categoria.id_categoria = tb_produto.id_categoria
        
        inner join tb_produto_tamanho
        on tb_produto_tamanho.id_produto = tb_produto.id_produto
        inner join tb_tamanho 
        on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
        
        inner join tb_produto_imagem
        on tb_produto_imagem.id_produto = tb_produto.id_produto
    
        inner join tb_marca
        on tb_marca.id_marca = tb_produto.id_marca
        
        where nm_categoria like '%Masculino%'
    
        group by tb_produto.id_produto,
            nm_produto,
            nm_prod_complemento,
            vl_preco,
            ds_cor,
            nm_modelo,
            nm_categoria,
            nm_marca,
            vl_disponivel
            ;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function listarProdutosFemininos(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
	from tb_produto

    inner join tb_modelo
    on tb_modelo.id_modelo = tb_produto.id_modelo
    inner join tb_categoria
    on tb_categoria.id_categoria = tb_produto.id_categoria
    
	inner join tb_produto_tamanho
	on tb_produto_tamanho.id_produto = tb_produto.id_produto
	inner join tb_tamanho 
    on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
    
    inner join tb_produto_imagem
    on tb_produto_imagem.id_produto = tb_produto.id_produto

    inner join tb_marca
    on tb_marca.id_marca = tb_produto.id_marca
    
    where nm_categoria like '%Feminino%'

    group by tb_produto.id_produto,
        nm_produto,
        nm_prod_complemento,
        vl_preco,
        ds_cor,
        nm_modelo,
        nm_categoria,
        nm_marca,
        vl_disponivel
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarMarcaGucci(){
    const comando = `select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_marca like '%Gucci%'

group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function listarPedidos() {
    const comando =
        `	 	select 
        tb_pedido.id_pedido    as idPedido,
        tp_pagamento     as pagamento,
        ds_endereco        as Endereço,
        nr_numero         as NumeroEndereço,
        ds_cidade         as Cidade,
        nr_cep            as Cep,
        ds_complemento     as Complemento,
    
        vl_total        as totalItem,
        vl_frete        as valorDoFrete,
        dt_pedido     as dataDoPedido,
        nm_usuario        as nomeUsuario,
        tb_pedido.id_usuario		as idUsuario,
        ds_status        as statudDoPedido,
        ds_tamanho		as tamanho,
    
        nm_produto        as    nomeProduto,
        nm_marca        as marcaProduto,
        ds_cor            as corProduto,
        vl_preco        as valorProduto,
        qtd_produto        as qtdProduto,
        
        ds_imagem			as imagem
    from tb_pedido

        inner join tb_produto
        on tb_produto.id_produto = tb_pedido.id_usuario

        inner join tb_marca
        on tb_marca.id_marca = tb_produto.id_produto

        inner join tb_pedido_item
        on tb_pedido_item.id_produto_item = tb_pedido.id_usuario

        inner join tb_usuario
        on tb_usuario.id_usuario = tb_pedido.id_usuario

        inner join tb_produto_imagem
        on tb_produto_imagem.id_produto_imagem = tb_produto.id_produto;`

    const [linhas] = await con.query(comando);
    return linhas;
}





export async function buscarPedidoPorId(Id) {
    const comando =
        `	 	                       
        select 
        tb_pedido.id_pedido    as idPedido,
        tp_pagamento     as pagamento,
        ds_endereco        as Endereço,
        nr_numero         as NumeroEndereço,
        ds_cidade         as Cidade,
        nr_cep            as Cep,
        ds_complemento     as Complemento,
    
        vl_total        as totalItem,
        vl_frete        as valorDoFrete,
        dt_pedido     as dataDoPedido,
        nm_usuario        as nomeUsuario,
        ds_status        as statudDoPedido,
        ds_tamanho		as tamanho,
    
        nm_produto        as    nomeProduto,
        ds_cor            as corProduto,
        vl_preco        as valorProduto,
        qtd_produto        as qtdProduto,
        
        ds_imagem			as imagem
        
        from
        tb_pedido
			inner join tb_pedido_item
		on tb_pedido_item.id_produto_item = tb_pedido.id_pedido
			inner join tb_usuario
		on tb_usuario.id_usuario = tb_pedido.id_usuario
			inner join tb_produto
		on tb_produto.id_produto = tb_pedido_item.id_produto
			inner join tb_produto_imagem
		on tb_produto_imagem.id_produto_imagem = tb_produto.id_produto
        where tb_pedido.id_usuario = ?
        `

    const [linhas] = await con.query(comando, [Id]);
    return linhas;
}

export async function listarPedidosPorUsuario(){
    const comando = `
        select nm_usuario as nomeUsuario,
            nm_produto as nomeProduto,
            dt_pedido  as dataPedido,
            tb_pedido.id_pedido  as idPedido,
            vl_total	  as vlTotal
            
            
        from tb_pedido
        inner join tb_usuario
        on tb_usuario.id_usuario = tb_pedido.id_usuario
        inner join tb_produto
        on tb_produto.id_produto = tb_pedido.id_usuario
        inner join tb_pedido_item
        on tb_pedido_item.id_produto_item = tb_pedido.id_usuario;
    `
    const [linhas] = await con.query(comando);
    return linhas;
}



export async function alterarStatus(id, pedido) {
    const comando = `
        update tb_pedido
        set ds_status = ?
        where id_pedido = ?
    `

    const [resp] = await con.query(comando, [
        pedido.status,
        id
    ])

    return resp.affectedRows;
}