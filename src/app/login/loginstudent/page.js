'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

const LoginStudent = () => {
  const router = useRouter()

  return (
    <div>
      <h1>Login for Student</h1>
      <button onClick={()=> router.push('/login')}>Go to for Login Page</button>
      <Link href={'/'}>Home Page</Link>
    </div>
  )
}

export default LoginStudent
