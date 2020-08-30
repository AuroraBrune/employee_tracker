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
    salary DECIMAL(10,2) ,
    department_id INTEGER,
    PRIMARY KEY (id)
    );

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT ,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);