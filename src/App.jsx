import './App.css'
import React from 'react'
import Special from './Pages/Special' 
import Register from './Pages/Register'
import Login from './Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'





const App = () => {
  return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path='/register' element={<Register/>}/>
               <Route path='/logIn' element={<Login/>}/>
               <Route path='/*' element={<Special/>}/>
            </Routes>
         </BrowserRouter>   
      </div>
  )
}

export default App