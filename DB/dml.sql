use ModelleDB;

insert into tb_login (ds_email, ds_senha)
	values('admin','1234');
--


select
		id_login 			id,
		ds_email			email,
        ds_senha            senha
from    tb_login
where   ds_email = 			'admin'
and 	ds_senha = 			'1234';
--

-- 21
select * from tb_produto;
--

-- 20
insert into tb_produto (id_tamanho, id_modelo, id_img, nm_produto, nm_prod_complemento, vl_preco, ds_composicao, ds_detalhes, vl_juros, vl_parcela, ds_cor, id_marca, id_categoria)
			values	   	(1,1,1, 'camisa', 'braba', '1200', 'algodao', 'oi', '15', '12', 'azul', 1, 1);
-- ---------------
-- 12
insert into tb_marca (nm_marca)
			values	 	('Versace');
select * from tb_marca;
            
-- 19
insert into tb_produto_marca (id_marca, id_produto)
			values		(1,1);
select * from tb_produto_marca;
            
-- ---------------

insert into tb_imagem (ds_img)
			values 		('../../assets...');

insert into tb_produto_imagem (id_img, id_produto)
			values (1,1);


-- ------------
-- 13
insert into tb_tamanho (nm_tamanho)
			values	 	('PP');
select * from tb_tamanho;

-- 18
insert into tb_produto_tamanho (id_tamanho, id_produto)
			values		(1,1);
select * from tb_produto_tamanho;

-- ---------------
-- 14
insert into tb_modelo (nm_modelo)
			values	 	('Camisa');
select * from tb_modelo;

-- 17
insert into tb_produto_modelo (id_modelo, id_produto)
			values		(1,1);
select * from tb_produto_modelo;
-- ---------------
-- 15
insert into tb_categoria (nm_categoria)
			values	 	('Homem');
select * from tb_categoria;
		
-- 16
insert into tb_produto_categoria (id_categoria, id_produto)
			values		(1,1);
select * from tb_produto_categoria;
-- ---------------

--Insert modelos

insert into tb_modelo (nm_modelo)
            values     ('Camisa');
insert into tb_modelo (nm_modelo)
            values     ('Calça');
insert into tb_modelo (nm_modelo)
            values     ('Bermuda');
insert into tb_modelo (nm_modelo)
            values     ('Blusa');
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


--Insert Tamanhos
insert into tb_tamanho (nm_tamnho)
            values      ('PP');
insert into tb_tamanho (nm_tamnho)
            values      ('P');
insert into tb_tamanho (nm_tamnho)
            values      ('M');
insert into tb_tamanho (nm_tamnho)
            values      ('G');
insert into tb_tamanho (nm_tamnho)
            values      ('GG');


--insert Marcas

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
