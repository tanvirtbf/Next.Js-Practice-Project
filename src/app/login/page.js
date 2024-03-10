'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Login = () => {
  const router = useRouter()
  const navigate = (routeName)=>{
    router.push(routeName);
  }
  return (
    <div>
      <h1>Login Page</h1>
      <Link href={"/"}>Go to Home Page</Link>
      <button onClick={()=> navigate('/about')}>Go to About Page</button>
    </div>
  )
}

export default Login
