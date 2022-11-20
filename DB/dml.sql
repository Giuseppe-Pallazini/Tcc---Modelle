use ModelleDB;


insert into tb_usuario (nm_usuario, dt_nascimento, nr_telefone, ds_email, ds_senha)
	values 			   ('admin', 20010112, '(11)980165866', 'asdasd@gmail.com', '1234');

insert into tb_usuario (nm_usuario, dt_nascimento, nr_telefone, ds_email, ds_senha)
	values 			   ('usuario', 20010112, 11999, 'asdasd@gmail.com', '1234');
--
select 
        nm_tamanho
        from tb_produto
        inner join tb_produto_tamanho
        on tb_produto_tamanho.id_produto = tb_produto.id_produto
        inner join tb_tamanho
        on tb_tamanho.id_tamanho = tb_produto_tamanho.id_tamanho
        where tb_produto_tamanho.id_produto like 1;
        
--
select * from tb_usuario;
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
            values   ('Louis Vuitton');

insert into tb_marca (nm_marca)
            values   ('Prada');

insert into tb_marca (nm_marca)
            values    ('Versace');


-- Criação de Cupom

insert into tb_cupom (cod_cupom, vl_cupom, qtd_disponivel)
	values			 ('chambin', 12.00, 3);