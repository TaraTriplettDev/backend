import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  // const [count, setCount] = useState(0)

  const [data, setData] = useState()
  const [flag, setFlag] = useState(false)
  const [edit, setEdit] = useState({
    todo: ""
  })
  const [render, setRender] = useState(false)

  // test
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
    console.warn("USEEFFECT HIT AGAIN")
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

  }, [flag])

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
        setFlag(!flag)
      })
      .catch(err => console.log(err))

  }

  const handleDelete = (e) => {

    console.log("DEL Hit e.target.e", e.target.id)

    axios({
      method: "delete",
      url: `http://localhost:3000/delete/${e.target.id}`
    })
      .then(res => {
        console.log("re", res)
        console.log("RES", res.data._id)
        setData((prev) => prev.filter((item) => item._id != res.data._id))
      })
      .catch(err => console.log(err))
  }

  const handleEdit = () => {
    setRender(!render)
  }

  const handleEditSubmit = (e) => {
    console.log("HandleEdit HIT", e.target.id)
    axios({
      method: "put",
      url: `http://localhost:3000/edit/${e.target.id}`,
      data: edit
    })
      .then(res => {
        console.log("$$$$$$$$", res)
      })
      .catch(err => console.log(err))
  }

  const handleEditChange = (e) => {
    console.log("handleEditChange  HIT", e.target.value)
    setEdit({ todo: e.target.value })
  }



  return (
    <>
      {/* {console.log("data", data)} */}
      {/* {console.log("flag", flag)} */}
      {/* {console.log("EDIT", edit)} */}
      {console.warn("render", render)}
      {/* {console.log("newToDo", newToDo)} */}
      <input onChange={(e) => handleNewToDo(e)} />

      <button onClick={(e) => handleSubmit(e)}>Submit</button>


      {data && data.sort((a, b) => b.created - a.created).map((item) => {
        return (

          <div key={item._id} style={{ marginBottom: "20px" }}>

            <div style={{ border: '2px solid red' }}>

              {/* {render ? <p>TRUE</p>   :   <p>False</p>      }   */}


              {render
                ?
                (
                  <div>
                    <input
                      defaultValue={item.todo || ""}
                      onChange={(e) => handleEditChange(e)}
                    >
                    </input>

                    <button
                      id={item._id}
                      onClick={(e) => handleEditSubmit(e)}
                    >
                      Submit
                    </button>

                  </div>
                )
                :
                (
                  <p> {item.todo}</p>
                )
              }



              <button id={item._id} onClick={(e) => handleDelete(e)}>delete</button>
              <button id={item._id} onClick={(e) => handleEdit(e)}>edit</button>

            </div>
          </div>
        )
      })}

    </>
  )
}

export default App
