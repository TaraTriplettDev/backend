import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
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


  const [data, setData] = useState([]); // initialize with an empty array
  const [newTodo, setNewTodo] = useState(""); // state for new todo input
  const [editingId, setEditingId] = useState(null); // state for the todo being edited
  const [editingText, setEditingText] = useState(""); // state for edit input
  // fetch todos from the backend
  useEffect(() => {
    console.log("useEFFECT TRIGGERED")
  }, [data])


  useEffect(() => {
    console.warn("USEEFFECT HIT AGAIN")
    axios({
      method: "get",
      url: "http://localhost:3000/gettodos",
    })
      .then(res => {
        console.log("res", res)
        // console.log("sorted", sorted)
        setData(res.data)

      .then((res) => {
        console.log("Fetched Todos:", res);
        setData(res.data);
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



      .catch((err) => console.log("Fetch Error:", err));
  }, []);
  // add new todo
  const handleAddTodo = () => {
    if (!newTodo.trim()) return; // stops adding empty todos
    const todoItem = { todo: newTodo, created: new Date() };
    axios({
      method: "post",
      url: "http://localhost:3000/create",
      data: todoItem, // save the new todo to the backend
    })
      .then((res) => {
        console.log("Todo Added:", res);
        setData([...data, res.data]); // update the todo list
        setNewTodo(""); // clear input
      })
      .catch((err) => console.log("Error adding todo:", err));
  };
  // delete a todo
  const handleDeleteTodo = (id) => {
    console.log("Deleting todo with ID:", id); // debug
    axios({
      method: "delete",
      url: `http://localhost:3000/delete/${id}`,
    })
      .then((res) => {
        console.log("Todo Deleted:", res.data);
        // filter out the deleted item from the state
        setData(data.filter((item) => item._id !== id));
      })
      .catch((err) => console.log("Error deleting todo:", err));
  };
  // enable edit mode
  const handleEditTodo = (id, currentText) => {
    setEditingId(id); // set the id of the todo being edited
    setEditingText(currentText); // set the current text to the input field
  };
  // save the edited todo
  const handleSaveEdit = (id) => {
    axios({
      method: "put",
      url: `http://localhost:3000/update/${id}`,
      data: { todo: editingText }, // send updated text to the backend
    })
      .then((res) => {
        console.log("Todo Updated:", res);
        // refresh the list from the server after updating
        axios({
          method: "get",
          url: "http://localhost:3000/gettodos",
        })
          .then((res) => {
            console.log("Updated List:", res.data);
            setData(res.data); // update the state with the refreshed list
          })
          .catch((err) => console.log("Fetch Error after Update:", err));
        setEditingId(null); // exit edit mode
        setEditingText(""); // clear edit text state
      })
      .catch((err) => console.log("Error updating todo:", err));
  };
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
    <div>
      <h1>To-Do-Matic</h1>
      {console.log("newTodo:", newTodo)}
      {/* input field and button for adding new todo */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={handleAddTodo} style={{ padding: "5px" }}>
          Add Todo
        </button>
      </div>
      {/* display todos */}
      {data &&
        data.map((item) => (
          <div
            key={item._id}
            style={{
              border: "2px solid red",
              margin: "10px",
              padding: "10px",
            }}
          >
            {editingId === item._id ? (
              // edit mode
              <div>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  style={{ marginRight: "10px" }}
                />
                <button onClick={() => handleSaveEdit(item._id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              // normal display
              <div>
                <p>{item.todo}</p>
                <button onClick={() => handleDeleteTodo(item._id)}>
                  Delete
                </button>
                <button onClick={() => handleEditTodo(item._id, item.todo)}>
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
export default App;
