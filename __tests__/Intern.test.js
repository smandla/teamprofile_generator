const Intern = require("../lib/Intern");
describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, and email", () => {
      const intern = new Intern("John Doe", 2, "jdoe@gmail.com", "UC Berkeley");

      expect(intern).toEqual({
        employeeName: "John Doe",
        employeeId: 2,
        employeeEmail: "jdoe@gmail.com",
        internSchool: "UC Berkeley",
      });
    });
  });
  describe("Get Role", () => {
    it("should get role of intern as 'Intern", () => {
      const intern = new Intern("John Doe", 2, "jdoe@gmail.com", "jdoe");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
