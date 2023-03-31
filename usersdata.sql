drop table if exists `users`;
create table users (
	id int,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	age int
);
insert into users (id, first_name, last_name, age) values (1, 'john', 'smith', 56);
insert into users (id, first_name, last_name, age) values (2, 'jaly', 'smith', 20);
insert into users (id, first_name, last_name, age) values (3, 'jim', 'smith', 18);
insert into users (id, first_name, last_name, age) values (4, 'jay', 'smith', 32);
insert into users (id, first_name, last_name, age) values (5, 'joe', 'smith', 21);