const inquirer = require("inquirer");
const mysql = require("mysql2");
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'password',
        database: 'roll_call'
    },
    console.log(`Connected to the inventory_db database.`)
);

db.connect(function (err) {
    if (err) throw err;
appMenu()
})

function appMenu() {

    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "view all departments", 
                "view all roles", 
                "view all employees", 
                "add a department", 
                "add a role", 
                "add an employee",
                "update an employee role",
                "Quit"
            ]
        }
    ]).then(userChoice => {
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
function viewDepartment(){
    db.query("SELECT * FROM department", function(err, res){
        if (err) throw err;
        console.table(res);
        appMenu()
    })
}
function viewRoles(){
    db.query("SELECT * FROM role", function(err, res){
        if (err) throw err;
        console.table(res);
        appMenu()

    }) 
}   
function viewEmployees(){
    db.query("SELECT * FROM employee", function(err, res){
        if (err) throw err;
        console.table(res);
        appMenu()

    }) 
} 
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "deptName",
            message: "Please enter a department name?",
        }]).then(userChoice => {

        db.query("INSERT INTO department(name) VALUES(?)",userChoice.deptName,function(err, res) {
                    if (err) throw err;
        console.table(res);
        appMenu()
           
        })
        })
    
}
