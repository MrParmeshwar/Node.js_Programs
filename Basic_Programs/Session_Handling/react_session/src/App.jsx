import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const  cn=useRef(null)
  const cv=useRef(null)
  const send=(event)=>{
    event.preventDefault()
    const obj={cname:cn.current.value,cvalue:cv.current.value}
    axios.post("http://localhost:3002/users",obj)
    console.log(obj) //This will print our cookies in our console tab.
  }

  return (
    <>
      <form>
        <input type="text" placeholder='Enter Cookie Name' ref={cn} />
        <br></br>
        <input type="text" placeholder='Enter Cookie Value' ref={cv} />
        <br></br>
        <input type='button' onClick={send} value="Click Here"></input>
      </form>
    </>
  )
}

export default App
