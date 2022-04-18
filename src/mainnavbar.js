import React from 'react'
import { NavLink } from 'react-router-dom'

const Mainnavbar = () => {
  return (
    <div className="mainnavbar">
      <NavLink to="/login"  className={"mainnavlink"}><button className='mainnavlinkbtn'>LogIn</button></NavLink>
    </div>
  )
}

export default Mainnavbar