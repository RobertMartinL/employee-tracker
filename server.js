const inquirer = require('inquirer');


const promptMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add employee', 'Update mployee role']
        }
    ])
    .then(data => {
        switch(data.menu) {
            case 'View all departments': viewDepartments()
            .then(promptMenu)
            break;

            case 'View all roles': viewRoles()
            .then(promptMenu)
            break;

            case 'View all employees': viewEmployees()
            .then(promptMenu)
            break;
        }
    })
};

promptMenu();

const viewDepartments = () => {

}





























