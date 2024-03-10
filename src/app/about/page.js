'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
  const router = useRouter()
  const navigate = (routeName)=>{
    router.push(routeName)
  }
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={()=> navigate('/')}>Go to Home Page</button>
      <button onClick={()=> navigate('/login')}>Go to Login Page</button>
    </div>
  )
}

export default About
