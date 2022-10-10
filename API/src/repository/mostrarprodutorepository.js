import {con} from './connection.js'

export default async function ListarTodosProdutos() {
 
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

export async function ListarTodosProdutosPorId(id) {
 
    const comando = `select id_produto as id,
                            nm_produto as produto,
                            nm_prod_complemento as complemento,
                            vl_preco as preco ,
                            vl_parcela as parcela,
                            vl_juros as juros,
                            vl_disponivel as disponivel,
                            ds_composicao as composicao,
                            ds_detalhes as detalhes,
                            ds_cor as cor ,
                            id_modelo as modelo ,
                            id_categoria as categoria ,
                            id_marca as marca
                    from tb_produto
                    where id_produto = ?
                    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function ListarTodosTamanhosporId(idProduto) {
 
    const comando = `select id_tamanho as id
                    from tb_produto_tamanho
                    where id_produto = ?
                    `

    const [linhas] = await con.query(comando, [idProduto]);
    return linhas.map(item => item.id);
}

export async function ListarTodosImagensporId(idProduto) {
 
    const comando = `select ds_imagem as id
                    from tb_produto_imagem
                    where id_produto = ?
                    `

    const [linhas] = await con.query(comando, [idProduto]);
    return linhas.map(item => item.id);
}


