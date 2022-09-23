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

