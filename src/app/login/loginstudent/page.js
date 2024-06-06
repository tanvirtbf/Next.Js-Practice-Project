"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginStudent = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Login Student</h1>
      <Link href={"/"}>Home Page</Link>
      <button onClick={()=> router.push("/login")}>Login</button>
    </div>
  )
}

export default LoginStudent
