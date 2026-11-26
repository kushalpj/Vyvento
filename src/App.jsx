import React from 'react'
import LandingPage from './components/LandingPage'
import {Route, Routes} from 'react-router-dom'

import './App.css'
import AdminPortal from './components/Admin/AdminPortal'
import UsersPortal from './components/Users/UsersPortal'
import PageNotFound from './components/Pages/PageNotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<AdminPortal/>} path='/adminportal/*'/>
        <Route element={<UsersPortal/>} path='/usersportal/*' />
        <Route element={<PageNotFound/>} path='*'/>
      </Routes>
    </>
  )
}

export default App