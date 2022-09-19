create database ModelleDB;

use ModelleDB;

create table tb_login (
id_login   int primary key auto_increment,
id_usuario int,
ds_email   varchar(100),
ds_senha   varchar(100),
foreign key (id_usuario) references tb_usuario (id_usuario)
);

create table tb_usuario (
id_usuario 			int primary key auto_increment,
nm_usuario 			varchar(100),
dt_nascimento 		date,
nr_telefone 		int,
ds_email 			varchar(50),
ds_senha 			varchar(50)
);

-- ---------------------------------------------------------------------------------------------------------

create table tb_produto (
id_produto 					int primary key auto_increment,
nm_produto 					varchar(100),
nm_prod_complemento 		varchar(100),
vl_preco 					decimal(15,2),
ds_composicao 				varchar(400),
ds_detalhes 				varchar(400),
foreign key (id_produto_cor) references tb_produto_cor (id_produto_cor),
foreign key (id_produto_imagem) references tb_produto_imagem (id_produto_imagem),
foreign key (id_produto_tamanho) references tb_produto_tamanho (id_produto_tamanho),
foreign key (id_produto_categoria) references tb_produto_categoria (id_produto_categoria),
foreign key (id_produto_marca) references tb_produto_marca (id_produto_marca),
foreign key (id_produto_modelo) references tb_produto_modelo (id_produto_modelo),
foreign key (id_produto_parcela) references tb_produto_parcela (id_produto_parcela),
foreign key (id_produto_juros) references tb_produto_juros (id_produto_juros)
);
 -- -----
 
create table tb_produto_cor (
id_produto_cor 		int primary key auto_increment,
ds_cor 				varchar(50),
id_produto			int,
foreign key (id_produto) references tb_produto (id_produto)
);
-- -----

create table tb_produto_imagem (
id_produto_imagem 			int primary key auto_increment,
img_produto 				varchar(100),
id_produto					int,
foreign key (id_produto) references tb_produto (id_produto)
);
-- -----

create table tb_marca (
id_marca 			int primary key auto_increment,
nm_marca 			varchar(100)
);

create table tb_produto_marca (
id_produto_marca 		int primary key auto_increment,
id_produto				int,
id_marca				int,
foreign key (id_produto) references tb_produto (id_produto),
foreign key (id_marca) references tb_marca(id_marca)
);
-- -----

create table tb_tamanho (
id_tamanho 			int primary key auto_increment,
ds_tamanho 			varchar(100)
);

create table tb_produto_tamanho (
id_produto_tamanho			int primary key auto_increment,
id_produto					int,
id_tamanho					int,
foreign key (id_produto) references tb_produto (id_produto),
foreign key (id_tamanho) references tb_tamanho (id_tamanho)
);
-- -----

create table tb_categoria (
id_categoria 		int primary key auto_increment,
nm_categoria 		varchar(50)
);

create table tb_produto_categoria (
id_produto_categoria 		int primary key auto_increment,
id_categoria				int,
id_produto					int,
foreign key (id_categoria) references tb_categoria (id_categoria),
foreign key (id_produto) references tb_produto (id_produto)
);
-- -----

create table tb_modelo (
id_modelo 		int primary key auto_increment,
ds_modelo 		varchar(100)
);

create table tb_produto_modelo (
id_produto_modelo 			int primary key auto_increment,
id_produto					int,
id_modelo					int,
foreign key (id_produto) references tb_produto (id_produto),
foreign key (id_modelo) references tb_modelo (id_modelo)
);
--  -----

create table tb_parcela (
id_parcela 			int primary key auto_increment,
vl_parcela          int
);

create table tb_produto_parcela (
id_produto_parcela 			int primary key auto_increment,
id_produto					int,
id_parcela					int,
foreign key (id_produto) references tb_produto(id_produto),
foreign key (id_parcela) references tb_parcela(id_parcela)
);
-- -----

create table tb_juros (
id_juros 			int primary key auto_increment,
vl_juros			int
);

create table tb_produto_juros (
id_produto_juros			int primary key auto_increment,
id_produto					int,
id_juros					int,
foreign key (id_produto) references tb_produto(id_produto),
foreign key (id_juros) references tb_juros(id_juros)
);