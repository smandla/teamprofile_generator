const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, and email", () => {
      const employee = new Employee("Cat Farley", 1, "catfarley@gmail.com");
      expect(employee).toEqual({
        employeeName: "Cat Farley",
        employeeId: 1,
        employeeEmail: "catfarley@gmail.com",
      });
    });
  });
  describe("Get Role Employee", () => {
    it("should get role of employee as 'Employee'", () => {
      const employee = new Employee("Cat Farley", 1, "catfarley@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});

//testcase for email validation
//test for name validation
//test for id validation
//test for role validation?
