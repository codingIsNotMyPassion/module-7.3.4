import React from 'react'
import { NavLink } from 'react-router-dom'

const ResetNavBar = () => {
  return (
    <div className="mainnavbar">
      <NavLink to="/" ><button className='mainnavlinkbtn'>SignUp</button></NavLink>
         <NavLink to="/login" ><button className='mainnavlinkbtn'>LogIn</button></NavLink>
    </div>
  )
}

export default ResetNavBar