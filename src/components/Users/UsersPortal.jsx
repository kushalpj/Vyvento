import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import ViewMore from '../Pages/ViewMore'
import Navbar from '../Navbar'
import PageNotFound from '../Pages/PageNotFound'
import CartItems from '../Pages/CartItems'

const UsersPortal = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<Products/>} path='/products' />
            <Route element={<ViewMore/>} path='/viewmore/:id' />
            <Route element={<CartItems/>} path='/cartitems' />
            <Route element={<PageNotFound/>} path='*'/>
        </Routes>
    </>
  )
}

export default UsersPortal