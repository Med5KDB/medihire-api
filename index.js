import express from "express";
import initDBConnection from "./src/config/db.js";
import userRouter from "./src/user/user.route.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to MediHire API");
});

app.use(express.json()); // New way to parse JSON i.e body-parser dependency is no longer needed
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);

initDBConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
