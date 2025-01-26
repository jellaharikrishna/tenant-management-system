import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Userprofile from './components/Userprofile'
import Notfound from './components/Notfound'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/' element={<Home />} />
      <Route exact path='/userprofile' element={<Userprofile />} />
      <Route exact path='*' element={<Notfound />} />
    </Routes>
  </BrowserRouter>
)

export default App

