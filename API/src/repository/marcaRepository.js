import {con} from './connection.js'

export async function listarMarca() {
    
    const comando = 
    `
    select id_marca         as id,
           nm_marca         as marca
      from tb_marca
    `

    const [linhas] = await con.query(comando);
    return linhas;
    
  }

  export async function buscarMarcaPorId(idMarca) {
    const comando = `
	    select id_marca         as id,
             nm_marca         as marca
        from tb_marca
       where id_marca = ?; 
      `

    const [linhas] = await con.query(comando, [idMarca]);
    return linhas[0];
  }

  export async function salvarProdutoMarca(idProduto, idMarca) {
    const comando = `
        insert into tb_produto_marca (id_marca, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idMarca, idProduto]);
}
