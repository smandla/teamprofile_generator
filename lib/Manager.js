const Employee = require("./Employee");

class Manager extends Employee {
  constructor(managerName, managerId, managerEmail, managerOffice) {
    //call variables from parent class using super
    super(managerName, managerId, managerEmail);
    this.officeNumber = managerOffice;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
