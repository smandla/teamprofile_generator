const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, and email", () => {
      const engineer = new Engineer("John Doe", 2, "jdoe@gmail.com", "jdoe");

      expect(engineer).toEqual({
        employeeName: "John Doe",
        employeeId: 2,
        employeeEmail: "jdoe@gmail.com",
        gitHubUsername: "jdoe",
      });
    });
  });
  describe("Get Role", () => {
    it("should get role of engineer as 'Engineer", () => {
      const engineer = new Engineer("John Doe", 2, "jdoe@gmail.com", "jdoe");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
