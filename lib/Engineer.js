const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(engineerName, engineerId, engineerEmail, gitHubUsername) {
    super(engineerName, engineerId, engineerEmail);
    this.gitHubUsername = gitHubUsername;
  }
  getGitHubUsername() {
    return this.gitHubUsername;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
