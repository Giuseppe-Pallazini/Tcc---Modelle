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

-- 2
create table tb_login (
id_login   int primary key auto_increment,
id_usuario int,
ds_email   varchar(100),
ds_senha   varchar(100),
foreign key (id_usuario) references tb_usuario (id_usuario)
);


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
id_marca					int
);


-- 9
create table tb_produto_tamanho (
id_produto_tamanho 		int primary key auto_increment,
id_tamanho				int,
id_produto				int,
foreign key (id_tamanho) references tb_tamanho (id_tamanho),
foreign key (id_produto) references tb_produto (id_produto)
);

-- 10
create table tb_produto_modelo (
id_produto_modelo		int primary key auto_increment,
id_modelo				int,
id_produto				int,
foreign key (id_modelo) references tb_modelo (id_modelo),
foreign key (id_produto) references tb_produto (id_produto)
);

-- 11
create table tb_produto_categoria (
id_produto_categoria		int primary key auto_increment,
id_categoria				int,
id_produto					int,
foreign key (id_categoria) references tb_categoria (id_categoria),
foreign key (id_produto) references tb_produto (id_produto)
);

-- 

create table tb_produto_imagem (
 id_produto_imagem			int primary key auto_increment,
 ds_imagem		            varchar(500),
 id_produto					int,
 foreign key (id_produto) references tb_produto (id_produto)
 );

				