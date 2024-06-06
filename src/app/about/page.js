"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
  const router = useRouter()
  const navigate = (route)=> {
    router.push(route)
  }
  return (
    <div>
      <h1>About Page</h1>
      <Link href={"/"}>Go to Home Page</Link>
      <button onClick={()=> router.push("/login")}>Login</button>
      <button onClick={()=> router.push("/")}>Home</button>
      <br />
      <br />
      <button onClick={()=> router.push("/about/aboutstudent")}>About Student</button>
      <button onClick={()=> navigate("/about/aboutcollege")}>About College</button>
    </div>
  )
}

export default About
