import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitForm = async (e) => {
    e.preventDefault()
    const userDetails = JSON.stringify({email, password})

    const url = "https://tenant-management-backend-ik4j.onrender.com/login"
    //const url = "http://localhost:5000/login"

    const options = {
      method: "POST",
      headers :{
        'Content-Type': 'application/json'
      },
      body: userDetails,
    }

    const response = await fetch(url, options)

    //const response = await axios.post(url, userDetails)
    const data = await response.json()
    console.log(response)
    console.log(data)

  }



  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>Login Form</h1>
        <div style={{"display": "flex", "flexDirection": "column", "width":"50%"}}>
          <label htmlFor="email">Email id:</label>
          <input onChange={(e) => setEmail(e.target.value)} id='email' type='text' value={email} name='email' placeholder='Enter your email id' />
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "width":"50%"}}>
          <label htmlFor="password">Password:</label>
          <input onChange={(e) => setPassword(e.target.value)} id='password' type='password' value={password} name='password' placeholder='Enter your password' />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <p>If you don't have an account? <Link to="/register">Sign up</Link></p>
    </div>
  )
}

export default Login