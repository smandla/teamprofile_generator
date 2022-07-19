const inquirer = require("inquirer");
function init() {
  managerQuestions();
}
function managerQuestions() {
  const questions = [
    { name: "managerName", message: "What is the team manager's name?" },
    {
      name: "managerID",
      message: "What is the team manager's id?",
    },
    { name: "managerEmail", message: "What is the team manager's email?" },
    {
      name: "managerOfficeNum",
      message: "What is the team manager's office number",
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}
init();
