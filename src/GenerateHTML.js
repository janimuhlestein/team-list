const Manager = require('../lib/Manager');

//Generate HTML for the Manager
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

//Generate the HTML for the interns
  const generateIntern = employeeArr => {
        return `
        ${employeeArr.map(({name, id, email, school})=> {
            return `
          <div class = "col-sm-4 col-xs-12">
            <div class = "panel panel-default text-center">
            <div class = "panel-heading">
                <h2 class = "head-text">${name}</h2>
                <h3 class = "head-text"><i class="fas fa-user-graduate"></i> Intern</h3>
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
    };

    //generate the HTML for the engineers
    const generateEngineer = employeeArr => {
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
                <p>GitHub: <a href='https://github.com/${github}'>https://github.com/${github}</a></p>
            </div>
        </div>
        </div>
          `;
        })
        .join('')}
        `;
    };


//generate the main HTML
const generateTemplate = employeeData => {
    const {engineers, interns, name, id, officeNumber}= employeeData;
    const manager = new Manager(name, id, officeNumber);
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
    ${generateEngineer(engineers)}
    ${generateIntern(interns)}
</div>
</div>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossorigin="anonymous"></script> 
</body>
</html>
`
};

module.exports = generateTemplate;
//module.exports =  {
//    generateEngineer: generateEngineer,
////    generateIntern: generateIntern
//};