## Team-List

# A team-list web-page generation tool.

## Question Functionality:

The tool asks the user for information on their team, requesting different information depending on the team member type. For Manager, it asks for the name, employee ID, and Office Number. For Engineers, it asks for name, employee ID, and github username. For Interns, it asks for name, employee ID, and school.

It starts by asking for the manager information. Then, it moves on, requiring that they enter at least one other employee. Once they have entered the information for that employee, based upon employee type, they are asked if they wish to enter another employee. This continues until they have completed adding in the members of their team.

As each team member is added, they are added to an array of engineers or interns, depending on type. These arrays, along with the manager information, are passed on to the HTML Generation functionality.

## HTML Generation Functionality:

The HTML functions take in the manager information, and each of the employee arrays. They then generate the appropriate HTML for the specific employee types.

## Page Creation Functionality:

The HTML is passed on to the writePage and copyPage functionality, which writes the information in the dist directory, and then copies the source style.css into that directory as well.

## Image of generated page:



## Gif of tool in action:
