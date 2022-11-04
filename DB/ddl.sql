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
    nr_cep				int,
    ds_complemento		varchar(50),
    vl_frete			decimal(15,2),
    qtd_produto			int,
    ds_status			varchar(25),
    tp_pagamento		varchar(20),
	foreign key (id_usuario)	references tb_usuario (id_usuario),
	foreign key (id_cupom)	references tb_cupom	 (id_cupom)
);

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
    id_produto			int,
    nm_titular			varchar(200),
	nr_cartao			varchar(200),
    dt_vencimento		varchar(200),
    cod_seguranca		int,
    nr_parcelas			varchar(200),
    foreign key (id_produto)	references tb_produto(id_produto)
);

create table tb_imagem_destaque_feminino(
	id_destaque_feminino	int primary key auto_increment,
    img_fem_imagem_1			varchar(200),
	img_fem_imagem_2			varchar(200),
    ds_fem_desc_1				varchar(80),
    ds_fem_desc_2				varchar(80)
);

create table tb_imagem_destaque_masculino(
	id_destaque_masculino	int primary key auto_increment,
    img_mas_imagem_1		varchar(500),
    img_mas_imagem_2		varchar(500),
    ds_mas_desc_1			varchar(50),
    ds_mas_desc_2			varchar(50)
);

create table tb_imagem_carrosel_feminino(
	id_carrosel_feminino	int primary key auto_increment,
    img_carrosel_fem_img_1	varchar(500),
    img_carrosel_fem_img_2	varchar(500),
    img_carrosel_gem_img_3	varchar(500),
    ds_carrosel_fem_desc_1	varchar(50),
    ds_carrosel_fem_desc_2	varchar(50)
);

create table tb_imagem_carrosel_masculino(
	id_carrosel_masculino	int primary key auto_increment,
    img_carrosel_mas_img_1	varchar(500),
    img_carrosel_mas_img_2	varchar(500),
    img_carrosel_mas_img_3	varchar(500),
    ds_carrosel_mas_desc_1	varchar(50),
    ds_carrosel_mas_desc_2	varchar(50)
);