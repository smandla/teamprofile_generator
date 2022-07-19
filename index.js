const inquirer = require("inquirer");
const arr = [];
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
    // console.log(answers);
    arr.push(answers);
    console.log(arr);
    addEmployee();
  });
}
function addEmployee() {
  const employeeTypeQuestion = [
    {
      name: "employeeType",
      message: "Which type of team member would you like to add?",
      type: "list",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members.",
      ],
    },
  ];
  inquirer.prompt(employeeTypeQuestion).then((answers) => {
    // console.log(answers);
    if (answers.employeeType === "Engineer") {
      console.log("Engineer");
    } else if (answers.employeeType === "Intern") {
      console.log("Intern");
    } else {
      console.log("NOne");
    }
  });
}
init();
