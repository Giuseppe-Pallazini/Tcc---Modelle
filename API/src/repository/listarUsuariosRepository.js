import { con } from "./connection.js"

export async function listarUsuarios() {
    const comando = `

        select  id_usuario      as usuario,
                nm_usuario 		as nome,
                dt_nascimento	as dataNascimento,
                nr_telefone		as telefone,
                ds_email		as email
        from tb_usuario`;

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function removerUsuario(id_usuario) {
    const comando = `
        delete from tb_usuario
            where 	id_usuario = ?
    `
    const [resp] = await con.query(comando, [id_usuario]);
    return resp.affectedRows;
}

export async function buscarUsuario(nome, email){
    const comando = `
        select  id_usuario      as usuario,
        nm_usuario 		as nome,
        dt_nascimento	as dataNascimento,
        nr_telefone		as telefone,
        ds_email		as email
        from tb_usuario
        where nm_usuario like ?
        and ds_email like ?
    `
    const [linhas] = await con.query(comando, [`%${nome}%`, `%${nome}}%`]);
    return linhas
}