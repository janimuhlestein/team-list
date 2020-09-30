const Employee = require('./lib/Employee');
const GenerateHTML = require('./src/GenerateHTML');
const CreatePage = require('./src/CreatePage');

//Ask the user for the team names and positions, then generate the page from the template
//then, create the page using the helper function and copy the stylesheet as well
/*
questions()
.then(answers => {
    return TeamMember(answers);
})
.then(page => {
    return GenerateHTML(page);
})
.then(GenerateHTMLResponse => {
    console.log(GenerateHTMLResponse);
})
.catch(err => {
    console.log(err);
});
*/
employee = new Employee('Jani Muhlestein');
console.log(employee.first, " ", employee.second);
