create database gestionDeMatricula;

use gestionDeMatricula;

create table Alumno(
	alu_codigo int not null auto_increment,
    alu_apellidos varchar(30),
    alu_nombres varchar(30),
    alu_sexo char,
    primary key (alu_codigo)
);

create table Especialidad(
	esp_codigo int not null auto_increment,
    esp_nombre varchar(30) not null,
    esp_duracion int not null,
    primary key (esp_codigo)
);

create table Matricula(
	codigo int not null auto_increment,
    fecha varchar(10) not null,
    alu_codigo int not null,
    esp_codigo int not null,
    costo int not null,
    primary key (codigo),
    foreign key(alu_codigo) references Alumno(alu_codigo),
    foreign key(esp_codigo) references Especialidad(esp_codigo)
);

insert into Alumno values (1, 'Bances', 'Leonardo', 'M');
insert into Alumno values (2, 'Bances', 'Jose', 'M');
insert into Alumno values (3, 'Espinoza', 'Ana', 'F');
insert into Alumno values (4, 'Bances', 'Fabiana', 'F');
insert into Alumno values (5, 'Bances', 'Manuel', 'M');

insert into Especialidad values (1, 'Ingeniero de Sistemas', '3');

insert into Matricula values (1, '20/12/2020', '1', '1', 20);

select * from Alumno;
select * from Especialidad;
select * from Matricula;