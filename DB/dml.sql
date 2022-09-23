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
insert into tb_produto (id_modelo, id_tamanho, nm_produto, nm_prod_complemento, vl_preco, ds_composicao, ds_detalhes, vl_juros, vl_parcela, ds_cor, id_marca, id_categoria)
			values	   	(1,1,'camisa', 'braba', '1200', 'algodao', 'oi', '15', '12', 'azul', 1, 1);
-- ---------------
-- 12
insert into tb_marca (nm_marca)
			values	 	('Versace');
            
-- 19
insert into tb_produto_marca (id_marca, id_produto)
			values		(1,1);
            
-- ---------------
-- 13
insert into tb_tamanho (nm_tamanho)
			values	 	('P');

-- 18
insert into tb_produto_tamanho (id_tamanho, id_produto)
			values		(1,1);
            
-- ---------------
-- 14
insert into tb_modelo (nm_modelo)
			values	 	('Camisa');
            
-- 17
insert into tb_produto_modelo (id_modelo, id_produto)
			values		(1,1);
            
-- ---------------
-- 15
insert into tb_categoria (nm_categoria)
			values	 	('Homem');
		
-- 16
insert into tb_produto_categoria (id_categoria, id_produto)
			values		(1,1);
            
-- ---------------