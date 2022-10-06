import {con} from './connection.js'

export default async function ListarTodosProdutos() {
 
    const comando = `select tb_produto.id_produto,
                        nm_produto,
                        nm_prod_complemento,
                        vl_preco,
                        ds_cor,
                        nm_modelo,
                        nm_categoria,
                        nm_tamanho,
                        nm_marca
                    from tb_produto

                            inner join tb_modelo
                            on tb_modelo.id_modelo = tb_produto.id_produto

                            inner join tb_categoria
                            on tb_categoria.id_categoria = tb_produto.id_produto

                            inner join tb_produto_tamanho
                            on tb_produto_tamanho.id_produto = tb_produto.id_produto
                            inner join tb_tamanho
                            on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho


                            inner join tb_marca
                            on tb_marca.id_marca = tb_produto.id_produto

                    group by tb_produto.id_produto,
                        nm_produto,
                        nm_prod_complemento,
                        vl_preco,
                        ds_cor,
                        nm_modelo,
                        nm_tamanho,
                        nm_marca,
                        nm_modelo,
                        nm_categoria
;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function ListarTodosProdutosPorId(id) {
 
    const comando = `select id_produto as id,
                            nm_produto as produto,
                            nm_prod_complemento as complemento,
                            vl_preco as preco ,
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


