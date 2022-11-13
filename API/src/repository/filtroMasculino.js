import { con } from "./connection.js";

export async function buscarMarcaGucci(){
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
and nm_categoria like '%Masculino%'

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

export async function buscarMarcaBalenciaga(){
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
and nm_categoria like '%Masculino%'

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

export async function buscarMarcaDolceGabanna(){
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
and nm_categoria like '%Masculino%'

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

export async function buscarMarcaBurberry(){
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
and nm_categoria like '%Masculino%'

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

export async function buscarMarcaMorley(){
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
and nm_categoria like '%Masculino%'

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

export async function buscarMarcaKenzo(){
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
and nm_categoria like '%Masculino%'

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

export async function buscarMarcaModelle(){
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
and nm_categoria like '%Masculino%'

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

export async function buscarMarcaZegna(){
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
and nm_categoria like '%Masculino%'

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

export async function buscarMarcaLouisVuitton(){
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
and nm_categoria like '%Masculino%'

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

export async function buscarMarcaVersace(){
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
and nm_categoria like '%Masculino%'

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

export async function buscarMarcaPrada(){
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
and nm_categoria like '%Masculino%'

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