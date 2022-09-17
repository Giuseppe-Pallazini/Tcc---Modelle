import {con} from './connection.js'

export async function login(email, senha) {
    const comando = 
    `select  
    id_usuario 			id,
    id_login 			id_login,
    ds_email			email,
    ds_senha            senha

    from    tb_login
    where   ds_email = 	?
    and 	ds_senha = 	?`

    const resp = await con.query(comando, [email, senha])
    const linhas = resp[0]
}