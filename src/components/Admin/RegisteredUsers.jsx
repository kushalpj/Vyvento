import { Email } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const RegisteredUsers = () => {
    let [userdata, setuserdata] = useState([])
    let fetchapi = async ()=>{
        try {
            let resp = await axios.get(`http://localhost:4000/users`)
            setuserdata(resp.data)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchapi()
    },[])
    console.log(userdata)

    let handledelete = async (id,username)=>{
        try {
            let bool = window.confirm(`Do you want to delete ${username} details...?`)
            if(bool){
                let del = await axios.delete(`http://localhost:4000/users/${id}`)
                toast.success(`${username} Data is deleted`)
                setTimeout(()=>{
                    window.location.reload()
                },2000)
            }else{
                toast.warn(`user details is not deleted`)
            }
        } catch (error) {
            toast.error(`User Details is Not deleted :${error}`)
        }
    }
  return (
    <>
        <div className="registered-users">
            <h1>Registered Users</h1>
            <div className="container">
                <table border={1}>
                    <thead>
                        <tr>
                            <th>sl no</th>
                            <th>User Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Date of Birth</th>
                            <th>Age</th>
                            <th>Place</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata.map((elem,index)=>{
                            let {username,id,contact,password,dob,place,email} = elem
                            return(
                                <tr key={index}>
                                    <th>{index+1}</th>
                                    <td>{username}</td>
                                    <td>{contact}</td>
                                    <td>{email}</td>
                                    <td onClick={()=>{alert(`Password : ${password}`)}}><b>******</b></td>
                                    <td>{dob}</td>
                                    <td>{new Date().getFullYear()-dob.slice(0,4)}</td>
                                    <td>{place}</td>
                                    <td>
                                        <button onClick={()=>{handledelete(id,username)}}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default RegisteredUsers