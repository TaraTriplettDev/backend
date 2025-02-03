const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
app.use(express.json()) // Access to the req.body

app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
))  //
const PORT = 3000

const Schema = mongoose.Schema
const ToDoSchema = new Schema(
    {
        todo: {
            type: String,
            required: true
        },
        created: Number
    }
)
const ToDo = mongoose.model("ToDo", ToDoSchema)
// 



app.get("/test", (req, res) => {
    console.log("Test HIT")
    res.json({ msg: "yup!" })
})

app.get("/gettodos", (req, res) => {
    console.log("GetToDos HIT")
    ToDo.find()
        .then(found => {
            console.log("found", found)
            res.json(found)
        })
        .catch(err => console.log(`this is a ${err}`))
})

app.post("/create", (req, res) => {
    console.log("CREATE HIT", req.body)
    ToDo.create(req.body)
    .then(created => {
        console.log("created", created)
        res.json(created)
    })
    .catch(err => console.log(err))
})

app.delete("/delete/:id", (req, res) => {
    console.log("Delete HIT", req.params.id)
    ToDo.findByIdAndDelete(req.params.id)
        .then(deleted => {
            console.log("deleted", deleted)
            res.json(deleted)
        })
        .catch(err => console.log(err))
})

app.put("/edit/:id", (req, res) => {
    console.log("Edit hit", req.params, req.body)
    ToDo.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updated => {
        console.log("upD", updated)
        res.json(updated)
    })
    // ToDo.findById(req.params.id)
    //     .then(found => {
    //         console.log("found", found)
    //         found.todo = req.body.todo
    //         found.save()
    //     })
})



app.listen(PORT, () => {


    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to Database")
        })
        .catch(err => console.log(err))


    console.log(`Server connnected at port : ${PORT}`)
})