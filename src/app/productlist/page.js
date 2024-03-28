"use client";
import { useEffect, useState } from "react";
export default function Page() {
  const [products,setProducts] = useState([])
  const getData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const res = await data.json();
    setProducts(res.products)
    console.log(products)
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <h1>Product List</h1>
      {
        products.map((item,i)=> <h2 key={i}>{item.title}</h2>)
      }
    </div>
  );
}
