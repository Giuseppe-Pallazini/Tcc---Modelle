import {con} from './connection.js'

export async function listarTamanhos() {
    
    const comando = 
    `
    select id_tamanho       as id,
           nm_tamanho       as tamanho
      from tb_tamanho
    `

    const [linhas] = await con.query(comando);
    return linhas;
    
  }

  export async function buscarTamanhoPorId(id) {
    const comando = `
    select 
    nm_tamanho as tamanho
    from tb_produto
    inner join tb_produto_tamanho
    on tb_produto_tamanho.id_produto = tb_produto.id_produto
    inner join tb_tamanho
    on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
    where tb_produto_tamanho.id_produto like ?;
      `

    const [linhas] = await con.query(comando, [id]);
    return linhas;
  }

  export async function salvarProdutoTamanho(idProduto, idTamanho) {
    const comando = `
        insert into tb_produto_tamanho (id_tamanho, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idTamanho, idProduto])
}
