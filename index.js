const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",

    // port; if not 3306
    port: 3306,

    // username
    user: "aurora",

    // password
    password: "81PW72LA",
    database: "employeesDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // runSearch();
});

