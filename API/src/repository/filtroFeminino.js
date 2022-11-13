import { con } from "./connection.js";


export async function buscarFemininoMarcaGucci(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoMarcaBalenciaga(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoMarcaDolceGabanna(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoMarcaBurberry(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoMarcaMorley(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoMarcaKenzo(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoMarcaModelle(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoMarcaZegna(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoMarcaLouisVuitton(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoMarcaVersace(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoMarcaPrada(){
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
and nm_categoria like '%Feminino%'

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



export async function buscarFemininoTamanhoPP(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoTamanhoP(){
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
and nm_categoria like '%Feminino%'

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


export async function buscarFemininoTamanhoM(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoTamanhoG(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoTamanhoGG(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoModeloCamisa(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoModeloCalca(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoModeloMoletom(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoModeloCasaco(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoModeloBermuda(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoModeloPolo(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoModeloSueter(){
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
and nm_categoria like '%Feminino%'

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

export async function buscarFemininoModeloBlusa(){
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
and nm_categoria like '%Feminino%'

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