"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const router = useRouter()
  return (
    <div>
      Login Page 
      <br />
      <br />     
      <button onClick={()=> router.push("/")}>Home</button>
    </div>
  )
}

export default Login
