"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
  const router = useRouter()
  const navigate = (route)=>{
    router.push(route)
  }
  return (
    <div>
      About Page
      <br />
      <br />
      <button onClick={()=> navigate("/")}>Home</button>
    </div>
  )
}

export default About
