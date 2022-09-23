import {con} from './connection.js'

export async function inserirImagem(imagem, id) {
    const comando =
        `update tb_produto_imagem
	         set img_produto
                    = ?
         where id_produto_imagem = ? `

    const [resposta] = await con.query(comando, [imagem, id])
    return resposta.affectedRows;
}