const engineer = require('../lib/Engineer');
const manager = require('../lib/Manager');
const intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');

const generateManager = manager => {
    return `
    <div class ="col-sm-4 col-xs-12">
    <div class = "panel panel-default text-center">
    <div class = "panel-heading">
        <h2 class = "head-text">${manager.name}</h2>
        <h3 class = "head-text"><i class="fas fa-user-tie"></i> Manager</h3>
    </div>
    <div class = "panel-body">
        <p>ID: ${manager.getId()}</p>
        <p>Email: ${manager.getEmail()}</p>
        <p>Office Number: ${manager.getOfficeNumber()}</p>
    </div>
    </div>
    </div>
    `
};

/*
const generateEmployee = employeeArr => {
    console.log(employeeArr);
    for(let i = 0; i < employeeArr.length; i++) {
        //console.log(employeeArr[i]);
        if(employeeArr[i].employeeType === 'engineer'){
            console.log("That's an engineer");
            name = employeeArr[i].name;
            name = new Engineer(employeeArr[i].name, employeeArr[i].id, employeeArr[i].github);
            //console.log(name);
        } else {
            console.log("That's an intern");
        }
    }
};
    
  
 
  /*const generateEmployee = employeeArr => {
      //console.log(employeeArr);
      for(let i = 0; i< employeeArr.length; i++) {
          return `
          <div class = "col-sm-4 col-xs-12">
          <div class = "panel panel-default text-center">
          <div class = "panel-heading">
              <h2 class = "head-text">${employeeArr[i].getName()}</h2>
              <h3 class = "head-text"><i class="fas fa-file-code"></i> ${employeeArr[i].getRole()}</h3>
          </div>
          <div class = "panel-body">
              <p>ID: ${employeeArr[i].getId()}</p>
              <p>Email: ${employeeArr[i].getEmail()}<</p>
              <p>School: ${employeeArr[i].getSchool()}</a></p>
          </div>
      </div>
      </div>
          `
      }
    /*employeeArr
        .filter(({Intern})=>Intern).map(({name,id,email, school})=> {
            console.log(Intern.name, Intern.id, Intern.school);
    return `
    <div class = "col-sm-4 col-xs-12">
            <div class = "panel panel-default text-center">
            <div class = "panel-heading">
                <h2 class = "head-text">${name}</h2>
                <h3 class = "head-text"><i class="fas fa-file-code"></i> Engineer</h3>
            </div>
            <div class = "panel-body">
                <p>ID: ${id}</p>
                <p>Email: ${email}<</p>
                <p>School: ${school}</a></p>
            </div>
        </div>
        </div>

    `

        });
  };*/

  const generateEmployee = employeeArr => {
      console.log(employeeArr);
      for (let i = 0; i< employeeArr.length; i++) {
          console.log(employeeArr[i].getRole());
      if(employeeArr[i].getRole()=== 'Intern') {
        return `
        ${employeeArr.map(({name, id, email, school})=> {
            return `
          <div class = "col-sm-4 col-xs-12">
            <div class = "panel panel-default text-center">
            <div class = "panel-heading">
                <h2 class = "head-text">${name}</h2>
                <h3 class = "head-text"><i class="fas fa-file-code"></i> Intern</h3>
            </div>
            <div class = "panel-body">
                <p>ID: ${id}</p>
                <p>Email: ${email}<</p>
                <p>School: ${school}</a></p>
            </div>
        </div>
        </div>
          `;
        })
        .join('')}
        `;
    } else {
        return `
        ${employeeArr.map(({name, id, email, github})=> {
            return `
          <div class = "col-sm-4 col-xs-12">
            <div class = "panel panel-default text-center">
            <div class = "panel-heading">
                <h2 class = "head-text">${name}</h2>
                <h3 class = "head-text"><i class="fas fa-file-code"></i> Engineer</h3>
            </div>
            <div class = "panel-body">
                <p>ID: ${id}</p>
                <p>Email: ${email}<</p>
                <p>Github: ${github}</a></p>
            </div>
        </div>
        </div>
          `;
        })
        .join('')}
        `; 
        }
        }
    };

    





const generateTemplate = employeeData => {
    const {employees, name, id, officeNumber}= employeeData;
    const manager = new Manager(name, id, officeNumber);
    //console.log(employeeData);
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
    <link rel = "stylesheet" href="./style.css">
    <title>Team List</title>

    </head>
<body>
 <header class = "header">
    My Team
</header>
<div class = "container-fluid">
    <div class = "row">
    ${generateManager(manager)}
    ${generateEmployee(employees)}
</div>
</div>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossorigin="anonymous"></script> 
</body>
</html>
`
};

//module.exports = generateTemplate;
module.exports =  generateEmployee;