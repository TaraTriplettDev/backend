import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  // const [count, setCount] = useState(0)

  const [data, setData] = useState()

  useEffect(() => {

    axios({
      method: "get",
      url: "http://localhost:3000/gettodos"
    })
      .then(res => {
        console.log("res", res)
        setData(res.data)
      })
      .catch(err => console.log("err", err))


  }, [])


  return (
    <>
      {console.log("data", data)}

   
        {data && data.map((item) => {
          return (
            <div style={{ border: '2px solid red' }}>

            <p> {item.todo}</p>
            <button>delete</button>
            <button>edit</button>
         
            </div>
          )
        })}

    </>
  )
}

export default App
