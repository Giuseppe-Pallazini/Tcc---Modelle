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

  export async function buscarTamanhoPorId(idTamanho) {
    const comando = `
	  select id_tamanho           as id,
             nm_tamanho         as tamanho
        from tb_tamanho
       where id_tamanho = ?; 
      `

    const [linhas] = await con.query(comando, [idTamanho]);
    return linhas[0];
  }

  export async function salvarProdutoTamanho(idProduto, idTamanho) {
    const comando = `
        insert into tb_produto_tamanho (id_produto, id_tamanho)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, idTamanho]);
    return resp;
}


