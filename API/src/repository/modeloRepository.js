import {con} from '../repository/connection.js'

export async function listarModelos() {
    const comando = 
        `select id_modelo           as id,
                nm_modelo         as modelo
                from tb_modelo`
    

    const [linhas] = await con.query(comando);
    return linhas;
}



export async function buscarModeloPorId(id) {
    const comando = 
        `select id_modelo             as id,
               nm_modelo             as modelo
          from tb_modelo
         where id_modelo = ?`
    

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

