use ModelleDB;

insert into tb_login (ds_email, ds_senha)
	values('admin','1234');
    
select * from tb_login;

--
select  id_usuario 			id,
		id_login 			id_login,
		ds_email			email,
        ds_senha            senha
from    tb_login
where   ds_email = 			'admin'
and 	ds_senha = 			'1234';