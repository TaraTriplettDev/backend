const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.set("views", "./views");

app.get("/", (req, res) => res.render("index"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/digimon", (req, res) => res.send("There are over 1,501 Digimon!"));
app.post("/digimon", (req, res) => res.send("Card Slash! New Digimon Submitted."));
app.put("/digimon/:id", (req, res) => res.send(`Digi-modify! ${req.params.id}`));
app.delete("/digimon/:id", (req, res) => res.send(`You killed ${req.params.id}! How could you?`));