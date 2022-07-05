drop database if exists `db`;
create database `db`;
use `db`;

create table `user`(
  `id` int not null auto_increment primary key,
  `name` varchar(100) not null,
  `email` varchar(100) not null,
  `created_at` datetime(3) not null default now(3),
  `updated_at` datetime(3) null on update now(3)
);
