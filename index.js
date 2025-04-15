const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to MediHire API");
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
