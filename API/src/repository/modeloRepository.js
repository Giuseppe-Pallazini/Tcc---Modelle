import {con} from '../repository/connection.js'

export async function listarModelos() {
    const comando = 
        `select id_modelo           as id,
                  nm_modelo           as modelo
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

export async function salvarProdutoModelo(idProduto, IdModelo) {
    const comando = `
        insert into tb_produto_modelo (id_modelo, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [IdModelo, idProduto]);
}
