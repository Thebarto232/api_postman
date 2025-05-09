-- Base de datos para el proyecto de Adso 2894667
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


-- INSERTs de prueba
insert into GENEROS (nom_genero) VALUES ('Masculino'), ('Femenino');
insert into CIUDADES (nom_ciudad) VALUES ('Bogotá'), ('Medellín');
insert into LENGUAJES (nom_lenguaje) VALUES ('JavaScript'), ('Python');


insert into USUARIOS (nombre, apellido, telefono, documento, usuario, contrasena, id_genero, id_ciudad)
values ('Juan', 'Pérez', '1234567890', '112233', 'juan123', '1234', 1, 1);


INSERT INTO lenguajes_usuarios (id_user, id_leng) VALUES (1, 1), (1, 2);


select * from GENEROS;
select * from CIUDADES;
select * from USUARIOS;
select * from LENGUAJES;
select * from lenguajes_usuarios;