import {con} from './connection.js'

export default async function ListarTodosProdutos() {
 
    const comando = `select
    id_produto				Id,
    id_tamanho				idtamanho,
    id_modelo				idmodelo,
    nm_produto				nome,
    nm_prod_complemento		complemento,
    vl_preco				preço,
    ds_composicao			composição,
    ds_detalhes				detalhes,
    vl_juros				juros,
    vl_parcela				parcela,
    ds_cor					cor,
    id_marca				idmarca,
    id_categoria			idcategoria

    from tb_produto`

    const [linhas] = await con.query(comando);
    return linhas;
}