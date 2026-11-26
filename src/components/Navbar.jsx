import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import AdminNavbar from './Admin/AdminNavbar'
import UsersNavBar from './Users/UsersNavBar'
// import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    // uselocation is a hook which is present in react-router-dom, it is used to target the location or path of component and it returns location object
    let location = useLocation()
    let path = location.pathname
    let bool = path.startsWith('/adminportal')
    // console.log(bool)
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="/images/logo.png" alt="" />
                </div>
                <div className="links">
                    {bool?
                        <AdminNavbar/>
                        :
                        <UsersNavBar/>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar