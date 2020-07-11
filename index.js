
var inquirer = require('inquirer');

//questions for README
inquirer
    .prompt([
    {
    type: 'input',
    name: 'readme',
    message: "Are you creating a README.md ? If yes, type README",
    },
  {
    type: 'input',
    name: 'title',
    message: "What's the name of you project",
  },
  {
    type: 'input',
    name: 'description',
    message: "Explain what this project about?",
  },
  {
    type: 'input',
    name: 'installation',
    message: "What are the installatoin requirements?",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Details about using this code?",
  },
  {
    type: 'checkbox',
    message: "What licence do you require?",
    name: 'licences',
    choices: [
      new inquirer.Separator(' = licence = '),
      {
        name: 'Licence 1',
      },
      {
        name: 'Licence 2',
      },
      {
        name: 'Licence 3',
      },
      {
        name: 'Other',
      },
    ]
  },
  {
    type: 'input',
    name: 'github',
    message: "What is your Github username?",
  },
  {
    type: 'input',
    name: 'email',
    message: "Your email address?",
  },
])

.then(function (response) {
    //Require the FS module to create the MD file
    const fs = require("fs");
    
    //Create the file and save the user's inputs
    fs.writeFile(`${response.readme}.md`,
        (`## Project Title: ${response.title} \n` +
            `\n## Description: \n${response.description} \n` +
            `\n## Table of Contents \n` +
            `* [Installation](#Installation) \n` +
            `* [Usage Information](#Usage) \n` +
            `* [Licenses](#Licenses) \n` +
            `* [Test Instructions](#Github) \n` +
            `* [Questions](#Questions) \n` +
            `* [License](#License)  \n` +
            `\n## Installation: \n${response.installation} \n` +
            `\n## Usage: \n${response.usage} \n` +
            `\n## Licenses: \n${response.licenses} \n` +
            `\n## Github Profile: \n${response.github} \n` +
            `\n## Email me at ${response.email}. \n`), 
        function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("ReadMe file generated.");
        });
});
