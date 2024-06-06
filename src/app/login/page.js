"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Login Page</h1>
      <Link href={"/"}>Go to Home Page</Link>
      <button onClick={()=> router.push("/about")}>About</button>
      <br /><br />
      <button onClick={()=> router.push("/login/loginstudent")}>Login Student</button>
      <br /><br />
      <button onClick={()=> router.push("/login/loginteacher")}>Login Teacher</button>
    </div>
  )
}

export default Login
