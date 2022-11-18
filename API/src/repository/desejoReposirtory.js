import { con } from "./connection.js"


export async function listaDesejos() {
    const comando = `
    insert into tb_lista_desejos(id_usuario,id_produto)
	values(?,?);
    `

    const 
}