"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginTeacher = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Login Teacher</h1>
      <button onClick={()=> router.push("/login")}>Login</button>
    </div>
  )
}

export default LoginTeacher
