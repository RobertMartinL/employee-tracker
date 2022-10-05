const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: '$Hakenbake32',
    database: 'tracker'
});




const promptMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add employee', 'Update employee role']
        }
    ])
        .then(data => {
            switch (data.menu) {
                case 'View all departments': viewDepartments()
                    break;

                case 'View all roles': viewRoles()
                    break;

                case 'View all employees': viewEmployees()
                    break;
                
                case 'Add department': addDepartment()
                    break;

                case 'Add role': addRole()
                    break;

                case 'Add employee': addEmployee()
                    break;

                case 'Update employee role': updateEmployee()
                    break;
            }
        })
};

const addDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department to be added?'
        }
    ])
    .then(department => {
        console.log(department)
        // return db.promise().query(`INSERT INTO departments SET ?`, department.name)
        return db.promise().query(`INSERT INTO departments (name)
        VALUES (department)`)
    }).then(() => {
        promptMenu()
    })
};

const addRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the job title to be added?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of this job title?'
        },
        {
            type: 'input',
            name: 'department',
            message: 'Which department will this role belong to?'
        }
    ])
};

promptMenu();

const viewDepartments = async () => {
    let results = await db.promise().query(`SELECT * FROM departments`)
    console.table(results[0]);
    promptMenu()
};

const viewRoles = async () => {
    let results = await db.promise().query(`SELECT * FROM roles`)
    console.table(results[0]);
    promptMenu()
};

const viewEmployees = async () => {
    let results = await db.promise().query(`SELECT * FROM employees`)
    console.table(results[0]);
    promptMenu()
};































