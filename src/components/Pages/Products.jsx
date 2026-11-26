
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';

const Products = () => {
  const [products, setProducts] = useState([])
  const [filterdata, setFilteredData] = useState([])

  const navigate = useNavigate()

  const fetchApi = async () => {
    try {
      const apiresp = await axios.get('http://localhost:4000/products')
      setProducts(apiresp.data)
      setFilteredData(apiresp.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])
  
  const location = useLocation()
  let bool = location.pathname.startsWith(`/adminportal`)
  const viewMore = (id) => {
    bool 
    ? navigate(`/adminportal/viewmore/${id}`)
    : navigate(`/usersportal/viewmore/${id}`)
  }

  const categoryarray = [
    'All',
    "men's clothing",
    'jewelery',
    'electronics',
    "women's clothing"
  ]
  const [activeCategory, setActiveCategory] = useState("All");
  const filterCategory = (categoryname) => {
    if (categoryname === 'All') {
      setFilteredData(products)
    } else {
      const res = products.filter((elem) => {
        return elem.category === categoryname
      })
      setFilteredData(res)
    }
  }

  return (
    <div className="products">
      <div className="category">
        <div className="btns">
          {categoryarray.map((elem) => (
            <button
              key={elem}
              className={activeCategory === elem ? "active" : ""}
              onClick={() => {
                setActiveCategory(elem);
                filterCategory(elem);}}
            >
              {elem}
            </button>
          ))}
        </div>
      </div>

      <div className="cards">
        {filterdata.map((elem) => {
          const {
            id,
            title,
            price,
            category,
            image,
            rating
          } = elem

          return (
            <div className="card" key={id}>
              <div className="cat">{category}</div>

              <img src={image} alt={title} />

              <div className="title">{title}</div>

              <div className="box">
                <div className="rating">
                  ⭐ {rating?.rate ?? 'N/A'}
                </div>

                <div className="price">
                  Rs. {Math.floor(price * 95.12)}/-
                </div>
              </div>

              <button onClick={() => viewMore(id)}>
                View More
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products
