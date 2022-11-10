import { con } from "./connection.js"

export async function listarUsuarios() {
    const comando = `
    select nm_usuario 	    as nome,
	    	ds_email 	    as email,
		    dt_nascimento   as dataNascimento,
            nr_telefone     as numero
    from tb_usuario `;

    const [linhas] = await con.query(comando);
    return linhas;
}
