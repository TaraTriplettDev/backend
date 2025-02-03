import { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  // const [count, setCount] = useState(0)

  const [data, setData] = useState()

  // test
  // test
  const [newToDo, setNewToDo] = useState(
    {
      todo: "",
      created: Date.now()
    }
  )


  useEffect(() => {
    console.log("useEFFECT TRIGGERED")
  }, [data])


  useEffect(() => {

    axios({
      method: "get",
      url: "http://localhost:3000/gettodos"
    })
      .then(res => {
        console.log("res", res)
        // console.log("sorted", sorted)
        setData(res.data)

      })
      .catch(err => console.log("err", err))

  }, [])

  const handleNewToDo = (e) => {

    console.log("handleNewToDo Hit", e)
    console.log("handleNewToDo Hit", e.target)
    console.log("handleNewToDo Hit", e.target.value)

    setNewToDo((prev) => ({
      ...prev,
      todo: e.target.value
    }))


  }
  const handleSubmit = (e) => {

    console.log("HandleSubmit HIT", newToDo)

    console.log("i am getting stuff")
    axios({
      method: "post",
      url: "http://localhost:3000/create",
      data: newToDo
    })
      .then(res => {
        console.log("res", res)
        // setNewToDo({todo: ""})
      })
      .catch(err => console.log(reportError))

  }

  const handleDelete = (e) => {
    console.log("DEL Hit", e.target.id)

    axios({
      method: "delete",
      url: `http://localhost:3000/delete/${e.target.id}`
    })
    .then(res => {
      console.log("re", res)
      console.log(res.data._id)
      setData((prev) => prev.filter((item) => item._id != res.data._id))
    })
    .catch(err => console.log(err))
  }




return (
  <>
    {console.log("data", data)}
    {console.log("newToDo", newToDo)}

    <input value={newToDo.todo || ""} onChange={(e) => handleNewToDo(e)} />

    <button onClick={(e) => handleSubmit(e)}>Submit</button>


    {data && data.sort((a,b) =>  b.created - a.created).map((item) => {
      return (

        <div key={item._id}  style={{ marginBottom: "20px" }}>

          <div style={{ border: '2px solid red' }}>

            <p> {item.todo}</p>
            <button id={item._id} onClick={(e) => handleDelete(e)}>delete</button>
            <button>edit</button>

          </div>
        </div>
      )
    })}

  </>
)
}

export default App
