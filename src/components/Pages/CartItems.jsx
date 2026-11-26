import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';

const CartItems = () => {
    let [cartItem, setCartItem] = useState([])

    let fetchapi = async ()=>{
        try {
            let res = await axios.get(`http://localhost:4000/cartitems`)
            setCartItem(res.data)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchapi()
    },[])
    // console.log(cartItem)

    let handledelte = async (id)=>{
        try {
            let bool = window.confirm('Do you want to delete this Product from the cart')
            if(bool){
                await axios.delete(`http://localhost:4000/cartitems/${id}`)
                toast.error('Product is Deleted from the Cart')
                setTimeout(()=>{
                    window.location.reload()
                },2000)
            }
            else{
                toast.warning('Product is not deleted')
            }
        } catch (error) {
            toast.error(`Product not found :${error}`)
        }

    }
    let totalPrice = cartItem.reduce((total, elem) => {
        return total + Math.floor(elem.price * 95.12)
    }, 0);

    
  return (
    <>
        <div className="cart-items">
            <h1>Cart Items</h1>
            {cartItem.length === 0 ? <h2 style={{color:"red"}}><marquee>No Items Found</marquee></h2> : <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>slno</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItem.map((elem,index)=>{
                            let {id, title, price, description,category,image, rating, rate, count} = elem

                            return(
                                <tr key={index}>
                                    <th>{index+1}</th>
                                    <td>{title}</td>
                                    <td><img src={image} alt="" height={100}/></td>
                                    <td>{category}</td>
                                    <td>Rs. {Math.floor(price * 95.12)}/-</td>
                                    <td>
                                        <button onClick={()=>{handledelte(id)}}><DeleteIcon/></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <h2>Total price : RS {totalPrice}/-</h2>
            </div>}
        </div>
    </>
  )
}

export default CartItems