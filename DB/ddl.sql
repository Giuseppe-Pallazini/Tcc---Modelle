create database ModelleDB;

use ModelleDB;

-- 1
create table tb_usuario (
	id_usuario 			int primary key auto_increment,
	nm_usuario 			varchar(100),
	dt_nascimento 		date,
	nr_telefone 		int,
	ds_email 			varchar(50),
	ds_senha 			varchar(50)
);
select * from tb_usuario;

insert into tb_usuario (nm_usuario, dt_nascimento, nr_telefone, ds_email, ds_senha)
	values 			   ('admin', 20010112, 11999, 'asdasd@gmail.com', '1234');

insert into tb_usuario (nm_usuario, dt_nascimento, nr_telefone, ds_email, ds_senha)
	values 			   ('usuario', 20010112, 11999, 'asdasd@gmail.com', '1234');

     select id_usuario					id,
            nm_usuario					nome
       from tb_usuario
      where ds_email = 'juan@hotmail.com'
        and ds_senha = '1234';

-- 2
create table tb_login (
id_login   int primary key auto_increment,
id_usuario int,
ds_email   varchar(50),
ds_senha   varchar(50),
foreign key (id_usuario) references tb_usuario (id_usuario)
);

select * from tb_usuario;


-- ---------------------------------------------------------------------------------------------------------
-- 3
create table tb_marca (
id_marca		int primary key auto_increment,
nm_marca		varchar(200)
);

-- 4
create table tb_tamanho (
id_tamanho		int primary key auto_increment,
nm_tamanho		varchar(200)
);


-- 5
create table tb_modelo (
id_modelo 		int primary key auto_increment,
nm_modelo		varchar(200)
);


-- 6
create table tb_categoria (
id_categoria	int primary key auto_increment,
nm_categoria	varchar(200)
);


-- 7
create table tb_produto (
id_produto 					int primary key auto_increment,
nm_produto 					varchar(100),
nm_prod_complemento 		varchar(100),
vl_preco 					decimal(15,2),
ds_composicao 				varchar(400),
ds_detalhes 				varchar(400),
vl_juros					int,
vl_parcela					int,
vl_disponivel				int,
ds_cor						varchar(100),
id_marca					int,
id_modelo					int,
id_categoria				int
);

-- 9
create table tb_produto_tamanho (
id_produto_tamanho 		int primary key auto_increment,
id_tamanho				int,
id_produto				int,
foreign key (id_tamanho) references tb_tamanho (id_tamanho),
foreign key (id_produto) references tb_produto (id_produto)
);


--    

CREATE TABLE tb_produto_imagem (
    id_produto_imagem INT PRIMARY KEY AUTO_INCREMENT,
    ds_imagem VARCHAR(500),
    id_produto INT,
    FOREIGN KEY (id_produto)
        REFERENCES tb_produto (id_produto)
);

create table tb_produto_feedback(
	id_produto_feedback int primary key auto_increment,
	id_usuario          int,
    id_produto			int,
    ds_mensagem			varchar(100),
    foreign key (id_produto)	references tb_produto (id_produto),
    foreign key (id_usuario)	references tb_usuario (id_usuario)
);

create table tb_lista_desejos(
	id_usuario_favorito	int primary key auto_increment,
    id_usuario			int,
    id_produto			int,
	foreign key (id_produto)	references tb_produto (id_produto),
    foreign key (id_usuario)	references tb_usuario (id_usuario)
);

create table tb_cupom(
	id_cupom			int primary key auto_increment,
    cod_cupom			varchar(10),
    vl_cupom			decimal(15,2),
    qtd_disponivel		int
);

insert into tb_cupom (cod_cupom, vl_cupom, qtd_disponivel)
	values			 ('chambin', 12.00, 3);
    
select * from tb_cupom;

create table tb_pedido(
	id_pedido			int primary key auto_increment,
    id_usuario			int,
    id_cupom			int,
    dt_pedido           date,
    cod_nota_fiscal     varchar(100),
    tp_frete			varchar(20),
    ds_endereco			varchar(60),
    nr_numero			int,
    ds_cidade			varchar(40),
    nr_cep				varchar(20),
    ds_complemento		varchar(50),
    vl_frete			decimal(15,2),
    ds_status			varchar(25),
    tp_pagamento		varchar(20),
	foreign key (id_usuario) references tb_usuario (id_usuario),
	foreign key (id_cupom)	references tb_cupom	 (id_cupom)
);	

INSERT INTO tb_pedido (
            id_usuario,
            id_cupom,
            dt_pedido,
            cod_nota_fiscal,
            tp_frete,
            vl_frete,
            ds_status,
            tp_pagamento,
            ds_endereco,			
            nr_numero,		
            ds_cidade,		
            nr_cep,		
            ds_complemento	
        )
        VALUES (1, 1, 20221212, 'OAS', 'asd', 12.00, 'asda', 'asd', 'asdasd', 12, 'SP', 123, 'asdasd');

select * from tb_pedido;
	

create table tb_pedido_item(
	id_produto_item		int primary key auto_increment,
	id_pedido			int,
    id_produto			int,
    qtd_produto			int,
    vl_total			decimal(15,2),
    foreign key (id_pedido)		references tb_pedido(id_pedido),
    foreign key (id_produto)	references tb_produto(id_produto)
);

create table tb_pagamento_cartao(
	id_pagamento_cartao	int primary key auto_increment,
    id_pedido			int,
    nm_cartao			varchar(200),
	nr_cartao			varchar(200),
    dt_vencimento		varchar(200),
    cod_seguranca		int,
    nr_parcelas			int,
    ds_forma_pagamento	varchar(200),
    foreign key (id_pedido)	references tb_pedido(id_pedido)
);
