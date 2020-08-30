DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
 );


 CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT ,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER,
    );

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT ,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);