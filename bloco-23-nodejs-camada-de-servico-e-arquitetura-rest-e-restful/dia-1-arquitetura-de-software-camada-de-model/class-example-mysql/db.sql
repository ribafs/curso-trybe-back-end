create database `db`;
use `db`;

create table `movies`(
	`id` int not null auto_increment  primary key,
    `name` varchar(100) not null,
    `year` int not null
);

insert into db.movies (name, year) values ('Gaiola das Loucas', 1996),
('Cruzeiros das Loucas', 2002);