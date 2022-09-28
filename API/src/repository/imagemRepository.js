import {con} from './connection.js'

export async function inserirImagem(imagem, id) {
    const comando =
        `insert into tb_produto_imagem (img_produto, id_produto)
        	    values (?, ?)`

    const [resposta] = await con.query(comando, [imagem, id])
    return resposta.affectedRows;
}