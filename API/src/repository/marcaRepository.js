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