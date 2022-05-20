import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import LoginNavbar from './loginNavbar'

function Login() {
  const nav = useNavigate()
  const [axiosData,setaxiosData] = useState(null)
    const pass = useRef("")
    const [checkvalue,setcheckvalue] = useState(false)
  const [list,setlist] = useState({
    email:"",
    password:""
})

const changeHandler = (e) => {
    e.preventDefault()
    setlist({...list,[e.target.name]:e.target.value})
}

const checkhandler = (e) => {
  if(checkvalue === false){
      setcheckvalue(true)
      pass.current.type = "text"
  }else{
      setcheckvalue(false)
      pass.current.type = "password"
  }
}

const submitHandler = async (e) => {
  e.preventDefault()
  let option = {
    url:"https://zenbackendtask-day-44.herokuapp.com/login",
    method:"POST",
    data:list,
    headers:{
      "content-type":"application/json"
    }
  }
  let result = await axios(option)
  console.log(result.data)
  if(result.data === "login Successfull"){
    setaxiosData(result.data)
    nav("/logedin")
  }else if(result.data === "Incorrect Password"){
    setaxiosData(result.data)
  }else{
    setaxiosData(result.data)
  }
  setTimeout(() => {
    setaxiosData(null)
  }, 2000);
  }
return (
    <div className="inputform">
      <LoginNavbar />
        <Form onSubmit={submitHandler} className="form">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" required="requires" value={list.email} onChange={changeHandler} name="email"/>
    <br />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
    <br />
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" required="requires" value={list.password} onChange={changeHandler} name="password"  ref={pass}/>
  </Form.Group>
  <Form.Check type="checkbox" label="Show Passward" onChange={checkhandler} checked={checkvalue}/>
    <br />
    <NavLink to="/emailverification" >Forgot Password</NavLink>
    <br />
    <br />
  <Button variant="primary" type="submit" className="formbtn">
    Login
  </Button>
</Form>
{
    axiosData ? <h1 style={{textAlign:"center"}}>{axiosData}</h1>:null
}
    </div>
  )
}

export default Login