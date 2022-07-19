const Employee = require("./Employee");

class Intern extends Employee {
  constructor(internName, internId, internEmail, internSchool) {
    super(internName, internId, internEmail);
    this.internSchool = internSchool;
  }
  getSchool() {
    return this.internSchool;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
