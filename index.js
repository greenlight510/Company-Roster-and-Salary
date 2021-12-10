const inquirer = require("inquirer");
const mysql = require("mysql2");
// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "roll_call",
  },
  console.log(`Connected to the inventory_db database.`)
);

db.connect(function (err) {
  if (err) throw err;
  appMenu();
});

function appMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          "Quit",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.memberChoice) {
        case "view all departments":
          viewDepartment();
          break;
        case "view all roles":
          viewRoles();
          break;
        case "view all employees":
          viewEmployees();
          break;
        case "add a department":
          addDepartment();
          break;
        case "add a role":
          addRoles();
          break;
        case "add an employee":
          addEmployee();
          break;
        case "update an employee role":
          updateEmployeeRole();
          break;
        default:
          db.end();
      }
    });
}
function viewDepartment() {
  db.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    appMenu();
  });
}
function viewRoles() {
  db.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    appMenu();
  });
}
function viewEmployees() {
  db.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    appMenu();
  });
}
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "deptName",
        message: "Please enter a department name?",
      },
    ])
    .then((userChoice) => {
      db.query(
        "INSERT INTO department(name) VALUES(?)",userChoice.deptName, function (err, res) {
          if (err) throw err;
          console.table(res);
          appMenu();
        }
      );
    });
}
function addRoles() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Please enter title name?",
      },
      {
        type: "input",
        name: "salary",
        message: "Please enter salary for position?",
      },
      {
        type: "input",
        name: "department_id",
        message: "Please enter a department ID for this role?",
      },
    ])
    .then((userChoice) => {
      db.query(
        "INSERT INTO role(title, salary, department_id) VALUES(?,?,?)",[userChoice.title,userChoice.salary,userChoice.department_id], function (err, res) {
          if (err) throw err;
          console.table(res);
          appMenu();
        }
      );
    });
}
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Please enter the first name of employee?",
      },
      {
        type: "input",
        name: "last_name",
        message: "Please enter the last name of employee?",
      },
      {
        type: "input",
        name: "role_id",
        message: "Please enter a role ID for this employee?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "Please enter the manager id this employee reports to?",
      },
    ])
    .then((userChoice) => {
      db.query(
        "INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)",[userChoice.first_name,userChoice.last_name,userChoice.role_id,userChoice.manager_id], function (err, res) {
          if (err) throw err;
          console.table(res);
          appMenu();
        }
      );
    });
}
