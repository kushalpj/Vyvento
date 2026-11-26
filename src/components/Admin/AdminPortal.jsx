import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Navbar from '../Navbar'
import ViewMore from '../Pages/ViewMore'
import AddProduct from '../Pages/AddProduct'
import UserRegistrationForm from './UserRegistrationForm'
import RegisteredUsers from './RegisteredUsers'
import PageNotFound from '../Pages/PageNotFound'

const AdminPortal = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<Products/>} path='/products' />
          <Route element={<ViewMore/>} path='/viewmore/:id' />
          <Route element={<AddProduct/>} path='/addproduct'/>
          <Route element={<UserRegistrationForm/>} path='/register'/>
          <Route element={<RegisteredUsers/>} path='/usersdetails'/>
          <Route element={<PageNotFound/>} path='*'/>
        </Routes>
    </>
  )
}

export default AdminPortal