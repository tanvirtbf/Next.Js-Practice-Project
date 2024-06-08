"use client"

import { useEffect, useState } from "react";

const ProductList = () => {
  const [product,setProduct] = useState([]);
  const getData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    setProduct(data.products);
  }
  useEffect(()=> {
    getData();
  },[])
  return (
    <div>
      <h1>Call api with Client Component</h1>
      {
        product.map((item,i)=> <h3 key={i}>{item.title}</h3>)
      }
    </div>
  );
};

export default ProductList;
