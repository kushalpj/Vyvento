import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UsersLogin = () => {
let [usersData,setUsersData]=useState([])
    let fetchAPi=async()=>{
        try {
            let resp = await axios.get(`http://localhost:4000/users`)
            setUsersData(resp.data)
        } catch (error) {
          toast.error(`Failed to fetchc:${error}`)
        }
    }
    useEffect(()=>{
        fetchAPi()
    },[])

    // todo:collect all email address from the usersAPI
    let allusersEmail=usersData.map(elem=>elem.email)
    // console.log(allusersEmail)


    // todo:collect input value from enduser &update
  let[FormData,setFormData] = useState({emailfield:"",passwordfield:""})

  let handleInput=(e)=>{
    e.preventDefault()
    let key = e.target.name
    let val = e.target.value
    setFormData({
      ...FormData,
      [key]:val
    })
  }
  let nav = useNavigate()
  let handleSubmit=(e)=>{
    e.preventDefault()
    let {emailfield,passwordfield}=FormData

    let emailIndex = allusersEmail.indexOf(emailfield)
    let successBorder = 'solid 2px green'
    let errorBorder = 'solid 2px red'
    if(emailIndex !== -1){
      e.target[0].style.border = successBorder
      let userPassword = usersData[emailIndex].password
      if(passwordfield===userPassword){
        toast.success('Login Success')
        e.target[1].style.border = successBorder
        nav('/usersportal/')
      }else{ 
        toast.error('Password is invalid')
        e.target[1].style.border = errorBorder
      }
    }else{
      toast.error('email is invalid')
      e.target[0].style.border = errorBorder
    }



    // console.log(usersData)
  }
  return (
    <div>
        <div className="users-login">
          
            <form onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  placeholder='Enter the Email'
                  onChange={handleInput}
                  name='emailfield'
                  value={FormData.emailfield}
                  required
                />
                <input 
                  type="password" 
                  placeholder='Enter the Password' 
                  onChange={handleInput}
                  name='passwordfield'
                  value={FormData.passwordfield}
                  required
                />

                <button className='btn'>Users Login</button>
            </form>
        </div>
    </div>
  )
}

export default UsersLogin