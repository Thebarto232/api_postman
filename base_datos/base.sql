use adso_2894667;

create table GENEROS(id_genero int auto_increment primary key, nom_genero varchar(20));
create table CIUDADES(id_ciudad int auto_increment primary key, nom_ciudad varchar(20));
create table USUARIOS(id_user int auto_increment primary key,
 nombre varchar(30),
 apellido varchar(30),
 telefono varchar(10),
 documento varchar (30),
 usuario varchar (30),
 contrasena varchar (30),
 id_genero int,
 id_ciudad int,
  foreign key (id_genero) references GENEROS(id_genero),
  foreign key (id_ciudad) references CIUDADES(id_ciudad))
;
create table LENGUAJES (	            
id_leng int auto_increment primary key,
 nom_lenguaje varchar(30));

 
create table lenguajes_usuarios(
id_user int,
 id_leng int, 
 foreign key (id_user) references USUARIOS(id_user),
 foreign key (id_leng) references LENGUAJES(id_leng)
	
);