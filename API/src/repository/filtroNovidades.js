import { con } from "./connection.js";


export async function buscarTodosMarcaGucci(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_marca like '%Gucci%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosMarcaBalenciaga(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_marca like '%Balenciaga%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosMarcaDolceGabanna(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_marca like '%Dolce & Gabbana%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosMarcaBurberry(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_marca like '%Burberry%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosMarcaMorley(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_marca like '%Morley%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosMarcaKenzo(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_marca like '%Kenzo%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosMarcaModelle(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_marca like '%Modelle%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosMarcaZegna(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_marca like '%Zegna%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosMarcaLouisVuitton(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_marca like '%Louis Vuitton%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosMarcaVersace(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_marca like '%Versace%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosMarcaPrada(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    count(nm_tamanho) as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_marca like '%Prada%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}



export async function buscarTodosTamanhoPP(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_tamanho like 'PP'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosTamanhoP(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_tamanho like 'P'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}


export async function buscarTodosTamanhoM(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_tamanho like 'M'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosTamanhoG(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_tamanho like 'G'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosTamanhoGG(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_tamanho like 'GG'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

//FILTRAR POR MODELO

export async function buscarTodosModeloCamisa(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_modelo like '%Camisa%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosModeloCalca(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_modelo like '%Calça%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosModeloMoletom(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_modelo like '%Moletom%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosModeloCasaco(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_modelo like '%Casaco%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosModeloBermuda(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_modelo like '%Bermuda%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosModeloPolo(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_modelo like '%Polo%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosModeloSueter(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_modelo like '%Suéter%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTodosModeloBlusa(){
    const comando = `
    select tb_produto.id_produto as produto,
    nm_produto as nome,
    nm_prod_complemento as complementoProduto,
    vl_preco as preco,
    ds_cor as cor,
    nm_modelo as idModelo,
    nm_categoria as idCategoria,
    nm_tamanho as idTamanho,
    nm_marca as idMarca,
    vl_disponivel as disponibilidade,
    ds_imagem
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_modelo
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_categoria
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
inner join tb_produto_imagem
on tb_produto_imagem.id_produto = tb_produto.id_produto


inner join tb_marca
on tb_marca.id_marca = tb_produto.id_marca

where nm_modelo like '%Blusa%'


group by tb_produto.id_produto,
    nm_produto,
    nm_prod_complemento,
    vl_preco,
    ds_cor,
    nm_modelo,
    nm_categoria,
    nm_marca,
    vl_disponivel;`

    const [linhas] = await con.query(comando);
    return linhas;
}