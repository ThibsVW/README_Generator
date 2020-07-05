
var inquirer = require('inquirer');

inquirer.prompt ([
  {
    type: 'input',
    name: 'repo name',
    message: "What's your repository name?",
    filter: function (val) {
        return val.toLowerCase();
      },
  },
  {
    type: 'input',
    name: 'introduction',
    message: "An introduction or lead on what problem your application solves",
    filter: function (val) {
        return val.toLowerCase();
      },
  },
  {
    type: 'input',
    name: 'codes',
    message: "Show a few code examples",
    filter: function (val) {
        return val.toLowerCase();
      },
  },
  {
    type: 'input',
    name: 'instruction',
    message: "Explain how your application works",
    filter: function (val) {
        return val.toLowerCase();
      },
  },

])

.then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));

});