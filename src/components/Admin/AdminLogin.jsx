import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminLogin = () => {
  let navigate = useNavigate()
  let [formData, setFormData] = useState({email:"",password:""})
  let handleInput = (e)=>{
    let key = e.target.name
    let val = e.target.value
    setFormData({
      ...formData,
      [key]:val
    })
  }

  let handleSubmit = (e)=>{
    event.preventDefault()
    let errborder = ` border:solid 2px red; color:red; background:white`
    let succborder = ` border:solid 2px green; color:green; background:white`
    let {email,password} = formData
    let credentials = {
      adminEmail : "admin@gmail.com",
      adminPswd : "Admin123"
    }

    let {adminEmail, adminPswd} = credentials

    if(email===adminEmail){
        e.target[0].style.cssText = succborder
        
      if(password === adminPswd){
        // console.log('welcome')
        e.target[1].style.cssText = succborder
        toast.success('Login Success')
        navigate('/adminportal')
      }else{
        // console.log('password is invalid')
        e.target[1].style.cssText = errborder
        toast.error('Password is invalid')
      }
    }else{
      // console.error('email is invalid')
        e.target[0].style.cssText = errborder
        toast.error('Email is invalid')


    }
  }
  return (
    <>
      <div className="admin-login">
        <form onSubmit={handleSubmit}>
          <input 
              type="email" 
              placeholder="Enter Your Email" 
              name='email'
              onChange={handleInput}
          />
          <input 
              type="password" 
              placeholder="Enter Your Password" 
              name='password'
              onChange={handleInput}    
          />

          <button>Admin Login</button>
        </form>
      </div>
    </>
  )
}

export default AdminLogin