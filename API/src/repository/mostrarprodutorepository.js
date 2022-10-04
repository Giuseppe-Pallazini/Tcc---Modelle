import {con} from './connection.js'

export default async function ListarTodosProdutos() {
 
    const comando = `select tb_produto.id_produto as produto, 
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
        nm_marca;`

    const [linhas] = await con.query(comando);
    return linhas;
}