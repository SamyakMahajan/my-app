import React, { useState,useEffect } from 'react'
import Create from './Create'
import axios from 'axios'
function Home() {
    const [products, setProducts]=useState([])
    useEffect(() => {
        axios.get('https://ph726.azurewebsites.net/get')
        .then(result=> setProducts(result.data))
        .catch(err=> console.log(err))
    },[])
  return (
    <div>
      <h2>Products Listing</h2>
      <Create/>
      {
        products.map(product=>(
            <div>
                {product.name}
            </div>
        ))
      }
    </div>
  )
}

export default Home
