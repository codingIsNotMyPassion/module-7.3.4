import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginNavbar = () => {
  return (
    <div className="mainnavbar">
        <NavLink to="/" ><button className='mainnavlinkbtn'>SignUp</button></NavLink>
    </div>
  )
}

export default LoginNavbar