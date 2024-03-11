async function productlist() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Page() {
  const getData = await productlist();
  console.log(getData);
  return (
    <div>
      <h1>Product List</h1>
      {getData.map((item, i) => (
        <h3 key={i}>{item.title}</h3>
      ))}
    </div>
  );
}

// "use client";
// import { useEffect, useState } from "react";
// export default function Page() {
//   const [products,setProducts] = useState([])
//   const getData = async () => {
//     const data = await fetch("https://dummyjson.com/products");
//     const res = await data.json();
//     setProducts(res.products)
//     console.log(products)
//   };
//   useEffect(() => {
//     getData();
//   });
// // 01883259988
//   return (
//     <div>
//       <h1>Product List</h1>
//       {
//         products.map((item,i)=> <h2 key={i}>{item.title}</h2>)
//       }
//     </div>
//   );
// }
