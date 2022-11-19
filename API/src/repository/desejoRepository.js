import { con } from "./connection.js";

export async function listaDesejo(avaliacao) {
    const comando = `
        insert into tb_lista_desejos (id_usuario, id_produto)
        values (?, ?)
    `
    const [resposta] = await con.query(comando, [
        avaliacao.idUsuario,
        avaliacao.idProduto
    ])
    return resposta.affectedRows;
}

export async function varificarSeJaFavoritou(idUser, idProduto) {
    const comando = `
    select id_usuario  id
          from tb_usuario_favorito
          where id_usuario = ?
          and     id_produto = ?;
    
    `
    
    let [linhas] = await con.query(comando, [idUser, idProduto])
    console.log(linhas);
    if (linhas == undefined) {
        linhas = undefined
    }
    else if (linhas[0] === !linhas) {
        linhas = 1
    }
    return linhas[0];
}