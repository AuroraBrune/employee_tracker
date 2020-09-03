const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql');
//Creating our connection to the MySQL workbench. 
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
//Establishing our connection with MySQL workbench. 
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});
// Function to start the Command Line Prompt of user to update or view the employees database.
function start() {
    inquirer       //List of prompt choices for the user to select  that will start each function.
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "Add departments.",
                "Add roles.",
                "Add employees.",
                "View department.",
                "View roles.",
                "View employees.",
                "Update employee roles."
            ]
        })
        //Switch case function to perform each function as selected by the user. 
        .then(function (answer) {
            switch (answer.action) {
                case "Add departments.":
                    addDep();
                    break;

                case "Add roles.":
                    addRoles();
                    break;

                case "Add employees.":
                    addEmp();
                    break;

                case "View department.":
                    viewDep();
                    break;

                case "View roles.":
                    viewRoles();
                    break;

                case "View employees.":
                    viewEmp();
                    break;

                case "Update employee roles.":
                    updateEmp();
                    break;
            }
        });
}
    //Functions to add information to each table the user chooses. Followed by the writing 
    //data to the table.
function addDep() {
    inquirer
        .prompt({
            name: "name",
            type: "input",
            message: "What department would you like to add?"
        })
        .then(function ({ name }) {
            connection.query("INSERT INTO department (name) VALUES ('" + name + "')", function (err, result) {
                if (err) throw err;
                start();
            });
        })
}

function addRoles() {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What role would you like to add?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary?"
            },
            {
                name: "department_id",
                type: "input",
                message: "What is the department id for this role?"
            },
        ])
        .then(function ({ title, salary, department_id }) {
            connection.query("INSERT INTO role (title, salary, department_id) " +
                "VALUES ('" + title + "', " + parseInt(salary) + ", " + parseInt(department_id) + ")",
                function (err, results) {
                    if (err) throw err;
                    start();
                });

        })
}

function addEmp() {
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is employee's first name?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is employee's last name?"
            },
            {
                name: "role_id",
                type: "input",
                message: "What is the employee's role id number?"
            },
            {
                name: "manager_id",
                type: "input",
                message: "What is the manager's id for this employee?"
            },
        ])
        .then(function ({ first_name, last_name, role_id, manager_id }) {
            connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id )" +
                "VALUES ('" + first_name + "', '" + last_name + "', " + parseInt(role_id) + ", " + parseInt(manager_id) + ")", function (err, answers) {
                    if (err) throw err;
                    start();
                });
        })
}
    //User can view the tables on the console with console.table.
function viewDep() {
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < 1; i++) {
        const table = cTable.getTable(res);
        console.table(table);
        start();
        }
        })
    };   

function viewRoles() {
    connection.query("SELECT * FROM role", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < 1; i++) {
            const table = cTable.getTable(res);
            console.table(table);
            start();
            }
            })
        };   

function viewEmp() {
    connection.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < 1; i++) {
            const table = cTable.getTable(res);
            console.table(table);
            start();
            }
            })
        };   

