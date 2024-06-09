const getData = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products
}

const ProductsList = async () => {
  const data = await getData();
  return (
    <div>
      <h1>Product List</h1>
      {
        data.map((item,i)=> <h3 key={i}>{item.title}</h3>)
      }
    </div>
  )
}

export default ProductsList
