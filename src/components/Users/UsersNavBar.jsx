import React from 'react'
import { NavLink } from 'react-router-dom'

const UsersNavBar = () => {
  return (
    <>
        <ul>
            <li><NavLink to='/usersportal/' >Home</NavLink></li>
            <li><NavLink to = "/usersportal/products">Products</NavLink></li>
            <li><NavLink to="/usersportal/cartitems">Add Cart</NavLink></li>
            <li><NavLink to='/'>LogOut</NavLink></li>
        </ul>
    </>
  )
}

export default UsersNavBar