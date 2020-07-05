
var inquirer = require('inquirer');

inquirer.prompt ([
  {
    type: 'input',
    name: 'repo name',
    message: "What's your repository name ?",
  },
  {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'languages',
    choices: [
      new inquirer.Separator(' = languages = '),
      {
        name: 'English',
      },
      {
        name: 'French',
      },
      {
        name: 'Arabic',
      },
      {
        name: 'Other',
      },
    ]
  },
  {
    type: 'list',
      name: 'Contact method',
      message: 'What is your preferred method of communication?',
      choices: ['Phone', 'Email', 'Fax'],
      filter: function (val) {
        return val.toLowerCase();
      },
  },

])

.then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));

});