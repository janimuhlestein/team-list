## Team-List

# A team-list web-page generation tool.

It would be helpful to have a tool to automatically generate a team list web page. The web page must contain different items for different employees. The manager must display the name, id, and office number. The engineer must display the name, id, and github user id, along with a link to the repository. The intern must display the name, id, and school they attend.

The tool must ask for the information, and then automatically generate the html. It must also copy the style.css page to the distribution directory.

## Test Functionality:

Each of the user objects must be tested for correct information. Each test must pass before writing of main functionality commences.

![tests](https://user-images.githubusercontent.com/52082187/95040806-055e7380-0692-11eb-8245-ba7f4e776f10.jpg)

## Question Functionality:

The tool asks the user for information on their team, requesting different information depending on the team member type. For Manager, it asks for the name, employee ID, and Office Number. For Engineers, it asks for name, employee ID, and github username. For Interns, it asks for name, employee ID, and school.

It starts by asking for the manager information. Then, it moves on, requiring that they enter at least one other employee. Once they have entered the information for that employee, based upon employee type, they are asked if they wish to enter another employee. This continues until they have completed adding in the members of their team.

As each team member is added, they are added to an array of engineers or interns, depending on type. These arrays, along with the manager information, are passed on to the HTML Generation functionality.

## HTML Generation Functionality:

The HTML functions take in the manager information, and each of the employee arrays. They then generate the appropriate HTML for the specific employee types.

## Page Creation Functionality:

The HTML is passed on to the writePage and copyPage functionality, which writes the information in the dist directory, and then copies the source style.css into that directory as well.

## Images of tool use and generated page:

![tooluse](https://user-images.githubusercontent.com/52082187/95036369-f45b3580-0684-11eb-9361-4c65fde16652.jpg)

![webpagecreated](https://user-images.githubusercontent.com/52082187/95036552-89f6c500-0685-11eb-89c0-1e1d6248abfe.jpg)


## Gif of tool in action:
https://drive.google.com/file/d/1oeqL35O2Tjno6P1NRNppSWwGr8g6A4T2/view
