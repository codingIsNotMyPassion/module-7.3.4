import React from 'react'
import Input from './input'
import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Login from './login'
import Logedin from './logedin'
import Emailverification from './emailverification'
import Forgetpassword from './forgetpassword'


function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Input />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/logedin" element={<Logedin />} /> 
                <Route path="/emailverification" element={<Emailverification />} /> 
                <Route path="/forgotpassword" element={<Forgetpassword />} /> 
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App