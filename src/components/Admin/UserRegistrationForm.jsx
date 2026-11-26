import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserRegistrationForm = () => {

    let [usersdata, setUsersData] = useState([])
    let errmsg = useRef()
    let errinput = useRef()
    let navigate = useNavigate()
    let fetchApi = async ()=>{
        let usersApi = await axios.get(`http://localhost:4000/users`)
        setUsersData(usersApi.data)
    }

    useEffect(()=>{
        fetchApi()
    },[])
    // console.log(usersdata)

    let allusersEmail = usersdata.map((elem)=>{
        return(elem.email)
    })
    // console.log(allusersEmail)

    let [users, setUsers] = useState({
        id:"",
        username:"",
        contact:"",
        email:"",
        password:"",
        dob:"",
        place:""
    })
    let handleinput = (e)=>{
        let key = e.target.name
        let val = e.target.value
        // console.log(key, val)
        setUsers({
            ...users,
            [key]:val
        })
    }
    let handlesubmit = async ()=>{
        event.preventDefault()
        // console.log(users)
        
        try {
            let emailinput = users.email
            let bool = allusersEmail.includes(emailinput)
            if (bool){
                toast.error('Email is already exist')
                errmsg.current.innerText = 'Email is already exist'
                errinput.current.style.cssText = `border:solid 2px red;`
            }else{
                errmsg.current.innerText = ''
                errinput.current.style.cssText = `none`
                await axios.post(`http://localhost:4000/users`,users)
                toast.success(`User is registered`)
                setUsers({
                    id:"",
                    username:"",
                    contact:"",
                    email:"",
                    password:"",
                    dob:"",
                    place:""
                })
                navigate(`/adminportal/usersdetails`)
            }   
        } catch (error) {
            console.log(`User is not registred:${error}`)
        }
    }
  return (
    <>
        <div className="register">
            <div className="header">
                <h1>Registration form</h1>
                <button onClick={()=>{navigate('/adminportal/usersdetails')}}>
                    Registered User
                </button>
            </div>
            <div className="container">
                <form action="" onSubmit={handlesubmit}>
                    <label>
                        UserName :
                        <input 
                            type="text" 
                            onChange={handleinput}
                            name='username'
                            value={users.username}
                            required
                            
                        />
                    </label>
                    <label>
                        Contact :
                        <input 
                            type="tel" 
                            onChange={handleinput}
                            name='contact'
                            value={users.contact}
                            required
                        />
                    </label>
                    <label>
                        Email :
                        <input 
                            type="email" 
                            onChange={handleinput}
                            name='email'
                            value={users.email}
                            ref={errinput}
                            required
                        />

                    </label>
                    <div ref={errmsg} style={{color:"red",textAlign:"right"}}></div>
                    <label>
                        Password :
                        <input 
                            type="password" 
                            onChange={handleinput}
                            name='password'
                            value={users.password}
                            required
                
                        />
                    </label>
                    <label>
                        Date of Birth :
                        <input 
                            type="date"
                            onChange={handleinput}
                            name='dob'
                            value={users.dob}
                            required
                         
                        />
                    </label>
                    <label>
                        Place
                        <input 
                            type="text"
                            onChange={handleinput}
                            name='place'
                            value={users.place}
                            required
                        />
                    </label>

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default UserRegistrationForm