import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const AddProduct = () => {

    let navigate = useNavigate()
    let allcategory = ["men's clothing","jewelery","electronics","women's clothing"]
    let [newProduct , SetNewProduct] = useState(
        {
            title:"",
            price:"",
            description:"",
            category:"",
            image:"",
            rating:{
                rate:"",
                count:""
            }
        }
    )
  
    let handleinput = (e)=>{
        let key = e.target.name
        let val = e.target.value
        if(key === 'rate' || key === 'count'){
            SetNewProduct({
                ...newProduct,
                rating:{
                    ...newProduct.rating,
                    [key] : val
                }
            })
        }
        else{
            SetNewProduct({
                ...newProduct,
                [key]:val
            })
        }

    }

    let handlesubmit = async (e)=>{
        event.preventDefault()
        try {
            await axios.post(`http://localhost:4000/products`, {
                ...newProduct,
                price : Number(newProduct.price),
                rating : {
                    rate : Number(newProduct.rating.rate),
                    count : Number(newProduct.rating.count)
                }
            })
            toast.success('Product is added')
            navigate(`/adminportal/products`)
        } catch (error) {
            toast.error(`Product is not added ${error}`)
        }
    }
  
  return (
    <>
        <div className='add-product'>
            <h1>Add Product</h1>
            <div className="formbox">
                <form action="" onSubmit={handlesubmit}>
                    <div className="head">
                        <h3>Enter All Details</h3>
                        <div className="close" onClick={()=>{navigate(`/adminportal/products`)}}>❌</div>
                    </div>
                    <div className="inputfields">
                        <input 
                            type="text" 
                            placeholder='Enter Title' 
                            onChange={handleinput}
                            name='title'
                            value={newProduct.title}
                            required
                        />
                        <input 
                            type="text" 
                            placeholder='Enter Price' 
                            onChange={handleinput}
                            name='price'
                            value={newProduct.price}
                            required
                        />
                        <input 
                            type="text" 
                            placeholder='Enter Description' 
                            onChange={handleinput}
                            name='description'
                            value={newProduct.description}
                            required
                        />

                        <select name="category" id="" onChange={handleinput} required>
                            <option value={newProduct.category}>----Select Category----</option>
                            {allcategory.map((elem,index)=>{
                                return(
                                    <option value={elem} key={index}>{elem}</option>
                                )
                            })}
                        </select>
                        <input 
                            type="text" 
                            placeholder='Enter Image URL' 
                            onChange={handleinput}
                            name='image'
                            value={newProduct.image}
                            required
                        />
                        <input 
                            type="text" 
                            placeholder='Enter Rating' 
                            onChange={handleinput}
                            name='rate'
                            value={newProduct.rating.rate}
                            required
                        />
                        <input 
                            type="text" 
                            placeholder='Enter Count' 
                            onChange={handleinput}
                            name='count'
                            value={newProduct.rating.count}
                            required
                        />
                    </div>
                    <button type="submit" className="add-btn">
                        Add Product →
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddProduct