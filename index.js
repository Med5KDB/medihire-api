const express = require("express");
const initDBConnection = require("./src/config/db");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to MediHire API");
});

initDBConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
