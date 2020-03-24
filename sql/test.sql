DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS students;
create table classes (
  id bigint not null auto_increment,
  name varchar(100) not null,
  primary key (id)
 ) engine=InnoDB default charset=utf8;
create table students (
  id bigint not null auto_increment,
  class_id bigint not null,
  name varchar(100) not null,
  gender varchar(1) not null,
  score int not null,
  primary key (id)
 ) engine=InnoDB default charset=utf8;