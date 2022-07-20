const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const arr = [];
function init() {
  managerQuestions();
}
function managerQuestions() {
  const questions = [
    {
      name: "managerName",
      message: "What is the team manager's name? (first and last name) ",
    },
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
    //create new manager data obj with data from answers
    const managerData = new Manager(
      answers.managerName,
      answers.managerID,
      answers.managerEmail,
      answers.managerOfficeNum
    );
    arr.push(managerData);
    // console.log(arr);
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
      employeeQuestions();
    } else if (answers.employeeType === "Intern") {
      console.log("Intern");
      internQuestions();
    } else {
      //   console.log("NOne");
      fs.writeFile(
        `./dist/${arr[0].getName()}.html`,
        generateHTML(arr),
        (err) => (err ? console.error(err) : console.log("Success!"))
      );
      //   break;
    }
  });
}
function internQuestions() {
  const questions = [
    { name: "internName", message: "What is your intern's name?" },
    {
      name: "internID",
      message: "What is the team intern's id?",
    },
    { name: "internEmail", message: "What is the team intern's email?" },
    {
      name: "internSchool",
      message: "What is the team intern's school?",
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    //create new intern obj with params being passed
    const intern = new Intern(
      answers.internName,
      answers.internID,
      answers.internEmail,
      answers.internSchool
    );
    arr.push(intern);
    // console.log("arr", arr);
    addEmployee();
  });
}
function employeeQuestions() {
  const questions = [
    { name: "engineerName", message: "What is your engineer's name?" },
    {
      name: "engineerID",
      message: "What is the team engineer's id?",
    },
    { name: "engineerEmail", message: "What is the team engineer's email?" },
    {
      name: "engineerGitHubUsername",
      message: "What is the team engineer's GitHub username?",
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    //create engineer obj to push
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerID,
      answers.engineerEmail,
      answers.engineerGitHubUsername
    );
    arr.push(engineer);
    // console.log("arr", arr);
    addEmployee();
  });
}
init();
