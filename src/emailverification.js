import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Emailnavbar from './emailnavbar'

function Emailverification() {
  const [btnvalue,setbtnvalue] = useState("Send Code")
  const nav = useNavigate()
  const [msg,setmsg] = useState(null)
  const [list,setlist] = useState({
    email:"",
    code:""
  })
    const changeHandler = (e) => {
        e.preventDefault()
        if(e.target.name === "email"){
          setbtnvalue("Send Code")
          setlist({...list,[e.target.name]:e.target.value})
        }else{
          setbtnvalue("Submit")
          setlist({...list,[e.target.name]:e.target.value})
        }
      }

      const submiHandler = async (e) => {
        e.preventDefault()
        if(list.code === ""){
          let options = {
            method:"post",
            url:"https://zenbackendtask-day-44.herokuapp.com/emailverification",
            data:list,
            headers:{
              "content-type":"application/json"
            }
          } 
          let axiosResult = await axios(options)
          console.log(axiosResult)
          if(axiosResult.data.err){
            setmsg("Internal Server Problem Try Again later")
          }else if(axiosResult.data.message){
            setmsg("Check You Mail for OTP and even check in spam")
          }else if(axiosResult.data === "Enter Proper Mail Id"){
            setmsg("Enter Proper Mail Id")
          }
          setTimeout(() => {
            setmsg(null)
          }, 6000);
        }
        else{
          let options = {
            method:"post",
            url:"https://zenbackendtask-day-44.herokuapp.com/codeverification",
            data:list,
            headers:{
              "content-type":"application/json"
            }
          }
          let axiosResult = await axios(options)
          console.log(axiosResult)
          if(axiosResult.data === "Correct OTP"){
            nav("/forgotpassword")
          }else if(axiosResult.data === "Incorrect Otp"){
            setmsg("Enter Proper OTP")
          }else{
            setmsg("Email does not Exists")
          }
          setTimeout(() => {
            setmsg(null)
          }, 6000);
        }
      }
  return (
    <div className="inputform">
      <Emailnavbar />
        <h1 style={{textAlign:"center"}}>Enter Email to Reset Password</h1>
        <Form onSubmit={submiHandler} className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required="required" name="email" onChange={changeHandler} value={list.email}/>
        </Form.Group>
          <br />
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Code"  name="code" onChange={changeHandler} value={list.code}/>
        </Form.Group>
          <br />
        <br />
        
        <Button variant="primary" type="submit" value={btnvalue} className="formbtn">
          {btnvalue}
        </Button>
      {
        msg ? <h1 style={{textAlign:"center"}}>{msg}</h1> : null
      }
      </Form>
    </div>
  )
}

export default Emailverification