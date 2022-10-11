import {con} from '../repository/connection.js'


export async function removerProdutoMarca(id_produto){
    const comando =`
        delete from tb_produto_marca
                where id_produto = ?
    `
    const [resp] = await con.query(comando, [id_produto])
    return resp.affectedRows;
}

export async function removerProdutoTamanho(id_produto){
    const comando = `
        delete from tb_produto_tamanho
                where id_produto = ?
    `
    const [resp] = await con.query(comando, [id_produto])
    return resp.affectedRows;
}

export async function removerProdutoModelo(id_produto){
    const comando = ` 
        delete from tb_produto_modelo
                where id_produto = ?
    `
    const [resp] = await con.query(comando, [id_produto])
    return resp.affectedRows;
}

export async function removerProdutoCategoria(id_produto){
    const comando = `
        delete from tb_produto_categoria
                where id_produto = ?
    `
    const [resp] = await con.query(comando, [id_produto])
    return resp.affectedRows;
}


// export async function removerProdutoImagem(id_produto){
//     const comando = `
//         delete from tb_produto_imagem
//                 where id_produto = ?
//     `
//     const [resp] = await con.query(comando, [id_produto])
//     return resp.affectedRows;
// }

export async function removerProdutoImagem(id_produto){
    const comando = `
             delete from tb_produto_imagem
                    where id_produto = ?
    `
    const [resp] = await con.query(comando, [id_produto])
    return resp.affectedRows;
}


export async function removerProduto(id_produto){
    const comando = `
        delete from tb_produto
                where id_produto = ?
    `
    const [resp] = await con.query(comando, [id_produto])
    return resp.affectedRows;
}