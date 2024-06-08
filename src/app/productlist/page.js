import React from 'react'
import Button from './Button';

const getData = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

const ProductList = async () => {
  const data = await getData();
  return (
    <div>
      <h1>Call Api with Server Component</h1>
      {
        data.map((item,i)=> {
          return (
            <>
              <h3 key={i}>{item.title}</h3>
              <Button />
            </>
          )
        })
      }
    </div>
  )
}

export default ProductList

