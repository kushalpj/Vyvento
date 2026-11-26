import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import ClearIcon from '@mui/icons-material/Clear';
import { toast } from 'react-toastify'


const ViewMore = () => {
    let [product , setProduct] = useState({})
    let params = useParams()
    let productid = params.id
    let fetchsingleproduct =async()=>{
        const apiresp = await axios.get(`http://localhost:4000/products/${productid}`)
        setProduct(apiresp.data)
    }

    useEffect(()=>{
        fetchsingleproduct()
    },[])
    // console.log(product)

    let {id, title, price, description,category,image, rating, rate, count} = product

    const location = useLocation()
    let bool = location.pathname.startsWith(`/adminportal`)
    let nav = useNavigate()
    let goback = ()=>{
        bool 
        ? nav(`/adminportal/products/`)
        : nav(`/usersportal/products/`)
    }


    let Delete = async (id)=>{
        let bool = window.confirm(`Do you want to Delete This product`)
        if (bool){
            await axios.delete(`http://localhost:4000/products/${id}`)
            toast.error(`Product is Deleted`)
            nav(`/adminportal/products`)
        }else{
            toast.warn(`Product is not deleted`)
        }
    }
    let addtocart = async ()=>{
        try {
            let bool = window.confirm(`Do you want to add this product to cart`)
            if (bool){
                await axios.post('http://localhost:4000/cartitems',product)
                toast.success('Product is added to cart')
                nav(`/usersportal/cartitems`)
            }
            else{
                toast.warning('Product is not added')
            }
        } catch (error) {
            toast.error(`Product is not Found: ${error}`)
        }
    }
  return (
    <>
        <div className="view-more">
            <div className="card">
                <div className="left">
                    <img src={image} alt="" />
                </div>
                <div className="right">
                    <div className="close" onClick={goback}>❌</div>
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                    <div className="desc">
                        <p>{description}</p>
                    </div>
                    <div className="box">
                        <div className="rate"><h4>{rating?.rate}⭐</h4></div>
                        <div className="price"><h4>Rs {Math.floor(price*92)} /-</h4></div>
                    </div>
                    {bool?<button className='dlt' onClick={()=>{Delete(id)}}>Delete</button>:<button className='cart' onClick={addtocart}>Add To Cart</button>}
                </div>
            </div>
        </div>
    </>
  )
}

export default ViewMore