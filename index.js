const generateTemplate = require('./src/GenerateHTML');
//const {generateEngineer, generateIntern} = require('./src/GenerateHTML');
const {writeFile, copyFile} = require('./src/CreatePage');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

//Ask the user for the team names and positions, then generate the page from the template
//then, create the page using the helper function and copy the stylesheet as well

    const promptManager = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the team manager's name (Required):",
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name:");
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the manager's id number",
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's id number");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the manager's office phone number",
                validate: officeInput => {
                    if(officeInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's office phone number:");
                        return false;
                    }
                }
            }
        ])
    };
    
        const promptEmployees = employeeArray => {
            if(!employeeArray.engineers) {
               employeeArray.engineers = [];
            }
            if(!employeeArray.interns) {
                employeeArray.interns = [];
            }

            console.log(`
            ==================
            Add a new employee
            ==================
            `);

            return inquirer.prompt([
            {
                type: 'list',
                name: 'employeeType',
                choices: ['engineer', 'intern'],
                message: 'Please select the type of employee:',
            },
            {
                type: 'input',
                name: 'name',
                message: "Please enter the employee's name",
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee's name:");
                        return false;
                    }
                }
            }, 
            {
                type: 'input',
                name: 'id',
                message: "Please enter the employee's id number",
                validate: idInput=> {
                    if(idInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee's id number:");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the employee's GitHub user ID",
                when: (answers) => answers.employeeType === 'engineer'
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the employee's school name:",
                when: (answers) => answers.employeeType === 'intern'
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee?',
                default: true
            }
            ])
            .then(employeeData => {
                if(employeeData.employeeType === 'engineer'){
                    name = new Engineer(employeeData.name, employeeData.id,
                        employeeData.github);
                    employeeArray.engineers.push(name);
                } else {
                    name = new Intern(employeeData.name, employeeData.id, 
                        employeeData.school);
                        employeeArray.interns.push(name);

                }
              // employeeArray.employees.push(name);
               if(employeeData.confirmAddEmployee) {
                   return promptEmployees(employeeArray);
               } else {
                   return employeeArray;
               }
            });
    };

  
promptManager()
.then(promptEmployees)
.then(employeeArray => {
    return generateTemplate(employeeArray);
   // console.log(generateEngineer(employeeArray.engineers));
    //console.log(generateIntern(employeeArray.interns));
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile()
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
.catch(err => {
    console.log(err);
}); 