create database `db`;
use `db`;

create table `user`(
	`id` int not null auto_increment  primary key,
    `firstName` varchar(100) not null,
    `lastName` varchar(100) not null,
    `email` varchar(150) not null,
    `password` varchar(20)
);