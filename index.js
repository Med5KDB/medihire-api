import express from "express";
import initDBConnection from "./src/config/db.js";

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
