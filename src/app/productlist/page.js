import React from 'react'

async function productlists(){
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

const ProductList = async () => {
  const data = await productlists();
  return (
    <div>
      <h1>Product List</h1>
      {
        data.map((item,i)=> <h3 key={i}>{item.title}</h3>)
      }
    </div>
  )
}

export default ProductList

