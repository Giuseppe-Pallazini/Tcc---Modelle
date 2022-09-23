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














