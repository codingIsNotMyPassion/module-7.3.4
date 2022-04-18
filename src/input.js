import React, { useRef, useState } from "react";
import { Button, Form,} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import axios from "axios"
import Mainnavbar from "./mainnavbar";

function Input() {
  const [axiosdata,setaxiosdata] = useState(null)
    const pass = useRef("")
    const [checkvalue,setcheckvalue] = useState(false)
    const [list,setlist] = useState({
        name:"",
        email:"",
        password:""
    })
    const changeHandler = (e) => {
        e.preventDefault()
        setlist({...list,[e.target.name]:e.target.value})
    }

    const checkhandler = (e) => {
        if(checkvalue == false){
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
          url:"https://zenbackendtask-day-44.herokuapp.com/create",
          method:"post",
          data:list,
          headers:{
            "content-type":"application/json"
          }
        }
        let result = await axios(option)
        console.log(typeof result.data)
        let string = "abc"
        setlist({
          name:"",
          email:"",
          password:""
        })
        if(typeof result.data == typeof string ){
          setaxiosdata("user already exists")
        }else{
          setaxiosdata("SignUp Successful")
        }
        setTimeout(() => {
          setaxiosdata(null)
        }, 2500);
    }
  return (
    <div className="inputform">
      <Mainnavbar />
      <Form onSubmit={submitHandler} className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Name" required="requires" value={list.name} onChange={changeHandler} name="name"/>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required="requires" value={list.email} onChange={changeHandler} name="email"/>
          <br />
          
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" required="requires" value={list.password} onChange={changeHandler} name="password" ref={pass}/>
        </Form.Group>
        <Form.Check type="checkbox" label="Show Passward" onChange={checkhandler} checked={checkvalue}/>
        <br />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        <br />
        <br />
        <Button variant="primary" type="submit" className="formbtn">
          SignUp
        </Button>
      {
        axiosdata ? <h1 style={{textAlign:"center"}}>{axiosdata}</h1>:null
      }
      </Form>
      <br />
      <br />
      
    </div>
  );
}

export default Input;
