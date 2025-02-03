const express = require('express');
const app = express();
const items = []; // Simple in-memory database

// Middleware
app.use(express.json());

// Create (POST)
app.post('/items', (req, res) => {
    console.log("req.body", req.body)
    const item = req.body;
    console.log("item", item)
    items.push(item);
    console.log("item", item)
  res.status(201).send('Item created');
});

// Read (GET)
app.get('/items', (req, res) => {
  console.log("req")
  res.json(items);
});

// Update (PUT)
app.put('/items/:id', (req, res) => {
  console.log("req.params", req.params)
  console.log("req.body", req.body)
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  items[id] = updatedItem;
  res.send('Item updated');
});

// Delete (DELETE)
app.delete('/items/:pokeomon' ,(req , res) => {
  const id = parseInt(req.params.id);
  items.splice(id, 1);
  res.send('Item deleted');
});


const port = 3000
app.listen(port, () => {
  console.log('Server is running on port 3000');
});
