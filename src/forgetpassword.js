import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ResetNavBar from './resetnavbar'

function Forgetpassword() {
  const nav = useNavigate()
  const [checkvalue,setcheckvalue] = useState(false)
  const [msg,setmsg] = useState(null)
  const pass1 = useRef("")
  const pass2 = useRef("")
  const [list,setlist] = useState({
    password1:"",
    password2:"",
    email:""
  })
  
  const submitHandler = async (e) => {
    e.preventDefault()
    let {password1,password2} = list
    if(password1 == password2){
      let data = {
        email:list.email,
        password:list.password1
      }
      let options = {
        url:"https://zenbackendtask-day-44.herokuapp.com/forgotpassword",
        method:"post",
        data:data,
        headers:{
          "content-type":"application/json"
        }
      }
      let axiosresult = await axios(options)
      console.log(axiosresult.data.message)
      if(axiosresult.data.message == "Password Updated"){
        setmsg("Password Updated")
        nav("/login")
      }else{
        setmsg("email does not exists")
      }
      }
    else{
      setmsg("Password Does Not Match")
    }
    setTimeout(() => {
      setmsg(null)
    }, 2500);
  }

  const changeHandler = (e) => {
    e.preventDefault()
    setlist({...list,[e.target.name]:e.target.value})
  }

  const checkhandler = () => {
    if(checkvalue == false){
      setcheckvalue(true)
      pass1.current.type = "text"
      pass2.current.type = "text"
    }
    else{
      setcheckvalue(false)
      pass1.current.type = "password"
      pass2.current.type = "password"
    }
  }
  return (
    <div className="inputform">
      <ResetNavBar />
        <Form onSubmit={submitHandler} className="form">
       <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required="requires" value={list.email} onChange={changeHandler} name="email"/>
        </Form.Group>
          <br />
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="New Password" required="requires" value={list.password} onChange={changeHandler} name="password1" ref={pass1}/>
        </Form.Group>
          <br />

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirm Password" required="requires" value={list.password} onChange={changeHandler} name="password2" ref={pass2}/>
        </Form.Group>
        <Form.Check type="checkbox" label="Show Passward" onChange={checkhandler} checked={checkvalue}/>
        <br />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        <br />
        <br />
        <Button variant="primary" type="submit" className="formbtn">
          Reset
        </Button>
      {
        msg ? <h1 style={{textAlign:"center"}}>{msg}</h1> : null
      }
      </Form>
    </div>
  )
}

export default Forgetpassword