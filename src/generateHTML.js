function render() {}
function distributeData(data) {
  const manager = data.filter((employee) => {
    // console.log(employee.getRole());
    return employee.getRole() === "Manager";
  });
  //   console.log(manager);
  const engineers = data.filter((employee) => {
    return employee.getRole() === "Engineer";
  });
  //   console.log(engineers);
  const interns = data.filter((employee) => {
    return employee.getRole() === "Intern";
  });
  //   console.log(interns);
  const arr = [manager, engineers, interns];
  //   return manager, engineers, interns;
  return arr;
}
function generateHTML(data) {
  //   distributeData;
  //   console.log(data[0].constructor.name);
  const filtered = distributeData(data);
  console.log(filtered[0][0].getName());
  //   console.log();
  //   const { employeeName, employeeId, employeeEmail, officeNumber } = data[0];
  //   console.log(employeeName, employeeId, employeeEmail, officeNumber);
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="./assets/css/style.css" />
    </head>
    <body>
      <header><h1>My Team</h1></header>
      <main class="row justify-content-center w-100 cards">
      
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${filtered[0][0].getName()}</h5>
            <h6 class="card-subtitle mb-2">Emoji?</h6>
            <p class="card-text">ID:<span>${filtered[0][0].getId()}</span></p>
            <div class="container row">
              <span> Email: <a href="#" class="card-link">${filtered[0][0].getEmail()}</a></span>
              <span>
                Office Number: <a href="#" class="card-link">${filtered[0][0].getOfficeNumber()}</a></span
              >
            </div>
          </div>
        </div>
        ${filtered[1].map((engineer) => {
          return `<div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${engineer.getName()}</h5>
                <h6 class="card-subtitle mb-2">Emoji?</h6>
                <p class="card-text">
                  ID:<span>${engineer.getId()}</span>
                </p>
                <div class="container row">
                  <span>
                    Email:
                    <a href="#" class="card-link">
                      ${engineer.getEmail()}
                    </a>
                  </span>
                  <span>
                    GitHub:{" "}
                    <a href="#" class="card-link">
                      ${engineer.getGitHubUsername()}
                    </a>
                  </span>
                </div>
              </div>
            </div>`;
        })}
        ${filtered[2].map((intern) => {
          return `<div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${intern.getName()}</h5>
                <h6 class="card-subtitle mb-2">Emoji?</h6>
                <p class="card-text">
                  ID:<span>${intern.getId()}</span>
                </p>
                <div class="container row">
                  <span>
                    Email:
                    <a href="#" class="card-link">
                      ${intern.getEmail()}
                    </a>
                  </span>
                  <span>
                    GitHub:{" "}
                    <a href="#" class="card-link">
                      ${intern.getSchool()}
                    </a>
                  </span>
                </div>
              </div>
            </div>`;
        })}
      </main>
    </body>
  </html>
  `;
}
module.exports = generateHTML;
