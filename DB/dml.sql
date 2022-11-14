use ModelleDB;


insert into tb_login (ds_email, ds_senha)
	values('admin','1234');
insert into tb_login (ds_email, ds_senha)
	values('usuario','1234');
--
select 
        nm_tamanho
        from tb_produto
        inner join tb_produto_tamanho
        on tb_produto_tamanho.id_produto = tb_produto.id_produto
        inner join tb_tamanho
        on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
        where tb_produto_tamanho.id_produto like 1;

select
		id_login 			id,
		ds_email			email,
        ds_senha            senha
from    tb_login
where   ds_email = 			'admin'
and 	ds_senha = 			'1234';
--

-- 21
select 
	id_produto				id,
	nm_produto				nome,
    nm_prod_complemento 	Complemento,
    vl_preco				Preço,
    ds_composicao			Composição,
    ds_detalhes				Detalhes,
    vl_juros				Juros,
    vl_parcela				Parcela,
    vl_disponivel			Disponibilidade,
    ds_cor					Cor,
    id_marca				Id_Marca,
    id_modelo				Id_Modelo,
    id_categoria			Id_Categoria
from tb_produto;

select * from tb_produto_tamanho;
select * from tb_modelo;
select * from tb_categoria;
select * from tb_produto_imagem;




-- insert categrias

insert into tb_categoria (nm_categoria)
		values ('Feminino');
        
insert into tb_categoria (nm_categoria)
		values ('Masculino');
        
insert into tb_categoria (nm_categoria)
		values('Novidades');


-- insert modelos

insert into tb_modelo (nm_modelo)
            values     ('Camisa');
insert into tb_modelo (nm_modelo)
            values     ('Calça');
insert into tb_modelo (nm_modelo)
            values     ('Bermuda');
insert into tb_modelo (nm_modelo)
            values     ('Blusa');
insert into tb_modelo (nm_modelo)
            values     ('Suéter');
insert into tb_modelo (nm_modelo)
            values     ('Relogio');
insert into tb_modelo (nm_modelo)
            values     ('Polo');
insert into tb_modelo (nm_modelo)
            values     ('Moletom');
insert into tb_modelo (nm_modelo)
            values     ('Casaco');


-- insert Tamanhos
insert into tb_tamanho (nm_tamanho)
            values      ('PP');
insert into tb_tamanho (nm_tamanho)
            values      ('P');
insert into tb_tamanho (nm_tamanho)
            values      ('M');
insert into tb_tamanho (nm_tamanho)
            values      ('G');
insert into tb_tamanho (nm_tamanho)
            values      ('GG');


-- insert Marcas

insert into tb_marca (nm_marca)
            values    ('Gucci');

insert into tb_marca (nm_marca)
            values   ('Balenciaga');

insert into tb_marca (nm_marca)
            values    ('Dolce & Gabbana');

insert into tb_marca (nm_marca)
            values    ('Burberry');

insert into tb_marca (nm_marca)
            values   ('Morley');

insert into tb_marca (nm_marca)
            values   ('Kenzo');

insert into tb_marca (nm_marca)
            values    ('Modelle');

insert into tb_marca (nm_marca)
            values   ('Zegna');

insert into tb_marca (nm_marca)
            values   ('Louis Vuitton');

insert into tb_marca (nm_marca)
            values   ('Prada');

insert into tb_marca (nm_marca)
            values    ('Versace');


-- Inner Join da tabela de cadastro

select tb_produto.id_produto, tb_produto.nm_produto, tb_produto.nm_prod_complemento, tb_produto.vl_preco, tb_produto.ds_cor, tb_modelo.nm_modelo
		, tb_categoria.nm_categoria, tb_tamanho.nm_tamanho, tb_marca.nm_marca
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_produto
inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_produto
inner join tb_tamanho
on tb_tamanho.id_tamanho = tb_produto.id_produto
inner join tb_marca
on tb_marca.id_marca = tb_produto.id_produto;

-- -------------------------



select tb_produto.id_produto,
       nm_produto,
       nm_prod_complemento,
       vl_preco,
       ds_cor,
       nm_modelo,
       nm_categoria,
       id_tamanho,
       nm_marca
from tb_produto

inner join tb_modelo
on tb_modelo.id_modelo = tb_produto.id_produto

inner join tb_categoria
on tb_categoria.id_categoria = tb_produto.id_produto
inner join tb_produto_tamanho
on tb_produto_tamanho.id_produto = tb_produto.id_produto
inner join tb_marca
on tb_marca.id_marca = tb_produto.id_produto

    group by tb_produto.id_produto,
       nm_produto,
       nm_prod_complemento,
       vl_preco,
       ds_cor,
       nm_modelo,
       id_tamanho,
       nm_marca,
	   nm_modelo,
       nm_categoria
;


-- inner Join do gerenciar Produtos

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

    group by tb_produto.id_produto,
        nm_produto,
        nm_prod_complemento,
        vl_preco,
        ds_cor,
        nm_modelo,
        nm_categoria,
        nm_marca,
        vl_disponivel
;

