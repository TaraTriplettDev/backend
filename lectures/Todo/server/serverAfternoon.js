const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express() // no longer need to type express().WHATEVER
app.use(express.json())  // access to req.body
app.use(cors())
require('dotenv').config()

const Schema = mongoose.Schema
const ToDoSchema = new Schema(
    {
        todo: String,

        created: Number,

    }
)
const ToDo = mongoose.model("ToDo", ToDoSchema)



app.get("/test", (req, res) => {
    console.log("TEST HIT")
    res.json({ msg: "Responding to your request" })
})

app.get("/gettodos", (req, res) => {
    console.log("GetToDos HIT")
    ToDo.find()
        .then(found => {
            console.log("found", found)
            res.json(found)
        })
        .catch(err => console.log(err))
})

app.post("/create", (req, res) => {
    console.log("Create Hit", req.body)
    ToDo.create(req.body)
        .then(created => {
            console.log("created", created)
            res.json(created)
        })
        .catch(err => console.log(err))
})

app.delete("/delete/:id", (req, res) => {
    console.log("Delete HIT", req.params)
    ToDo.findByIdAndDelete(req.params.id)
        .then(deleted => {
            console.log("deleted", deleted)
            res.json(deleted)
        })
        .catch(err => console.log(err));
})

app.put("/edit/:id", (req, res) => {
    console.log("Edit Hit", req.params.id, req.body)
    // ToDo.findByIdAndUpdate(req.params.id, req.body, {new: true})
    //     .then(updated => {
    //         console.log("updatead", updated)
    //     })
    ToDo.findById(req.params.id)
        .then(found => {
            console.log("found", found)
            found.todo = req.body.todo
            found.save()
        })
})

const PORT = 3000

app.listen(PORT, () => {

    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yourdbname')
        .then(() => {
            console.log("Database Connected")
        })
        .catch(err => console.log(err))

    console.log(`Server connected at port ${PORT}`)
})
