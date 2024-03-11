'use client'

import { useRouter } from "next/navigation"

const Product = () => {
  const router = useRouter()
  const navigate = (item)=>{
    router.push(item)
  }
  return (
    <div>
      <button onClick={()=> navigate('/')}>Home</button>
    </div>
  )
}

export default Product
