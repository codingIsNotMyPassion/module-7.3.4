import React from 'react'
import { NavLink } from 'react-router-dom'

const Emailnavbar = () => {
  return (
    <div className="mainnavbar">
         <NavLink to="/" ><button className='mainnavlinkbtn'>SignUp</button></NavLink>
         <NavLink to="/login" ><button className='mainnavlinkbtn'>LogIn</button></NavLink>
    </div>
  )
}

export default Emailnavbar