create database ModelleDB;

use ModelleDB;

create table tb_usuario (
id_usuario 		int primary key auto_increment,
nm_usuario 		varchar(100),
dt_nascimento   date,
nr_telefone 	int,
ds_email		varchar(50),
ds_senha		varchar(50)
);

create table tb_login (
id_login		int primary key auto_increment,
id_usuario      int,
foreign key (id_usuario) references tb_usuario(id_usuario),
ds_email		varchar(100),
ds_senha 		varchar(50)
);