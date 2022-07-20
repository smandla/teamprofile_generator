const Manager = require("../lib/Manager");
describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, and email", () => {
      const manager = new Manager("John Doe", 2, "jdoe@gmail.com", 101);

      expect(manager).toEqual({
        employeeName: "John Doe",
        employeeId: 2,
        employeeEmail: "jdoe@gmail.com",
        officeNumber: 101,
      });
    });
  });
  describe("Get Role", () => {
    it("should get role of Manager as 'Manager", () => {
      const manager = new Manager("John Doe", 2, "jdoe@gmail.com", 101);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
