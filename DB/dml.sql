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
