 import { con } from './connection.js'

 export default async function CadastrarUsuario(usuario){
     const comando =`
         insert into tb_usuario (nm_usuario, dt_nascimento, nr_telefone, ds_email, ds_senha)
 				values(?, ?, ?, ?, ?) `

     const [resposta] = await con.query(comando, [
        usuario.nome, 
        usuario.dtNascimento, 
        usuario.telefone, 
        usuario.email, 
        usuario.senha]);
    usuario.id = resposta.insertId;
    return usuario;
 }


