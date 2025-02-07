const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const Schema = mongoose.Schema;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Schema
const ToDoSchema = new Schema({
  todo: String,
  created: Date,
});
const ToDo = mongoose.model("Todo", ToDoSchema);

// Routes

app.get("/test", (req, res) => {
  console.log("Test route hit!");
  res.json({ msg: "success" });
});

app.get("/Todos", (req, res) => {
  console.log("getTodos HIT");
  ToDo.find().then((found) => {
    console.log("Found", found);
    res.json(found);
  });
});

app.post("/newTodo", (req, res) => {
  console.log("Create Route HIT", req.body);
  ToDo.create(req.body).then((created) => {
    console.log("created", created);
    res.json(created);
  });
});

app.put("/editTodo/:id", async (req, res) => {
  console.log("Edit Route HIT", req.body);
  await ToDo.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Todo Edited"});
})

app.delete("/deleteTodo/:id", async (req, res) => {
  console.log("Delete Route HIT", req.body);
  await ToDo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo Deleted" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT${PORT}`);
});
