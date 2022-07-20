class Employee {
  //name, id, email, getName(), getId(), getEmail(), getRole(
  constructor(employeeName, employeeId, employeeEmail) {
    // console.log(employeeName === "");
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.employeeEmail = employeeEmail;
    if (employeeName === "") {
      this.employeeName = "N/A";
    }
    if (employeeId === "") {
      this.employeeId = "N/A";
    }
    if (employeeEmail === "") {
      this.employeeEmail = "N/A";
    }
  }

  getName() {
    return this.employeeName;
  }
  getId() {
    return this.employeeId;
  }
  getEmail() {
    return this.employeeEmail;
  }
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
