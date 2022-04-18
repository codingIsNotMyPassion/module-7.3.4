import React from 'react'
import DashBoardNavBar from './dashBoardNavBar'

function Logedin() {
  return (
    <div className="inputform">
      <DashBoardNavBar />
      <h1 style={{textAlign:"center"}}>Welcome to DashBoard</h1>
    </div>
  )
}

export default Logedin