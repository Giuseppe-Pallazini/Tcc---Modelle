  import {con} from './connection.js'

  export async function verCategoria(){
      const comando =`
      select  id_categoria    id,
              nm_categoria    categoria
      from tb_categoria`


  const [linhas] = await con.query(comando);
  return linhas;
  }


  export async function categoriaId(idCateg) {
    const comando = `
      select 
      id_categoria         id,
      nm_categoria         categoria
      from tb_categoria
      where id_categoria = ?
      `

    const [linhas] = await con.query(comando, [idCateg]);
    return linhas[0];
  }

