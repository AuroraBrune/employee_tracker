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
    start();
});

function start() {
    inquirer
    .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
            "Add departments.",
            "Add roles.",
            "Add employees.",
            "View departments.",
            "View roles.",
            "View employees.",
            "Update employee roles."
        ]
    })
    .then(function(answer) {
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

            case "View departments.":
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

function addDep() {
    inquirer
      .prompt({
          name: "name",
          type: "input",
          message: "What department would you like to add?"
      })
      .then(function({name}) {
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
      .then(function({title, salary, department_id}) {
          connection.query("INSERT INTO employee (title, salary, department_id) VALUES ('" + title + "',  + salary, + department_id)", function (err, result) {
              if (err) throw err;
              start();
          });
          
      })
}                           //work on numbers values, going in as null
                                // ).then(function ({ first_name, last_name, manager }) {
                                //     connection.query("INSERT INTO employee (first_name, last_name, manager) 
                                //         VALUES ?", ('first_name', 'last_name', 'manager'), function (err, result) {
                                //         if (err) throw err;
//                                 // })

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
          message: "What is the employee's id number?"
      },
      {
          name: "manager_id",
          type: "input",
          message: "What is the manager's id for this employee?"
      },
    ])
      .then(function({first_name, last_name, role_id, manager_id}) {
          connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id ) VALUES ('" + first_name + "', '" + last_name + "', + role_id, + manager_id)", function (err, result) {
              if (err) throw err;
              start();
          });
      })
}
      
      
