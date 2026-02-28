import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setmessage] = useState("Hello")
  const [data, setdata] = useState({
    name:"shubham",
    password:"shfeiwedfme"
  })
// fetch("https://3.108.64.6:4000/")
// .then(res=>res.json())
// .then(data=>setmessage(data.message))
// function submitForm(){
// fetch("http://localhost:4000/create", {
//   method: "POST", // or GET depending on your API
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data), // send data properly
// })
//   .then((res) => res.json())
//   .then((data) => setmessage(data.message))
//   .catch((err) => console.error(err));
// // alert("hii")
// }
  return (
    <>
     <div>{message}</div>

{/* <button onClick={submitForm}>Submit Form</button> */}
    </>
  )
}

export default App
