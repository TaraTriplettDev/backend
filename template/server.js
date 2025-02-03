// Import Express
// npm i express
const express = require('express');

// Initialize the app
const app = express();

app.use(express.json()); // Middleware to parse JSON body

// Define a port
const PORT = 3000

app.get("/pokemon", (req, res) => {
    console.log("pokemon hit")
    res.json({msg: "pokemon hit"})
})
app.get("/", (req, res) => {
    console.log("/ endpoint  hit")
})

// Start the server
app.listen(PORT, () => {   
     console.log(`Server is running on http://localhost:${PORT}`);
     });






