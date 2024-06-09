"use client"
import React, { useEffect, useState } from 'react'

const ProductsList = () => {
  const [product,setProduct] = useState([])
  const getData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    setProduct(data.products)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <h1>Product List</h1>
      {
        product.map((item,i)=> <h3 key={i}>{item.title}</h3>)
      }
    </div>
  )
}

export default ProductsList
