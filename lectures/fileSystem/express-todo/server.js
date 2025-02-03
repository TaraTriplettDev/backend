const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'todos.json');

app.use(express.json());


app.get('/todos', (req, res) => {
    console.log("get todos hit")
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read file' });
        res.json(JSON.parse(data));
    });
});

app.post('/todos', (req, res) => {
    console.log("post todos hit")

    const newTodo = req.body;
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        const todos = err ? [] : JSON.parse(data);
        newTodo.id = Date.now();
        todos.push(newTodo);
        fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Failed to save todo' });
            res.status(201).json(newTodo);
        });
    });
}); 

app.put('/todos/:id', (req, res) => {
    console.log("put todos hit")

    const id = parseInt(req.params.id);
    const updatedTodo = req.body;
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        let todos = err ? [] : JSON.parse(data);
        const index = todos.findIndex(todo => todo.id === id);
        if (index === -1) return res.status(404).json({ error: 'Todo not found' });
        todos[index] = { ...todos[index], ...updatedTodo };
        fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Failed to update todo' });
            res.json(todos[index]);
        });
    });
});

app.delete('/todos/:id', (req, res) => {
    console.log("delete todos hit")

    const id = parseInt(req.params.id);
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        let todos = err ? [] : JSON.parse(data);
        todos = todos.filter(todo => todo.id !== id);
        fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Failed to delete todo' });
            res.status(204).send();
        });
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

