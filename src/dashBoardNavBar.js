import React from 'react'
import { NavLink } from 'react-router-dom'

const DashBoardNavBar = () => {
  return (
    <div className="mainnavbar">
        <NavLink to="/" ><button className='mainnavlinkbtn'>LogOut</button></NavLink>
    </div>
  )
}

export default DashBoardNavBar