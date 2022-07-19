function generateHTML(data) {
  console.log(data);
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
            <h5 class="card-title">Name</h5>
            <h6 class="card-subtitle mb-2">Emoji?</h6>
            <p class="card-text">ID:<span> ID</span></p>
            <div class="container row">
              <span> Email: <a href="#" class="card-link">email address</a></span>
              <span>
                GitHub: <a href="#" class="card-link">GitHub username</a></span
              >
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Name</h5>
            <h6 class="card-subtitle mb-2">Emoji?</h6>
            <p class="card-text">ID:<span> ID</span></p>
            <div class="container row">
              <span> Email: <a href="#" class="card-link">email address</a></span>
              <span>
                GitHub: <a href="#" class="card-link">GitHub username</a></span
              >
            </div>
          </div>
        </div>
      </main>
    </body>
  </html>
  `;
}
module.exports = generateHTML;
