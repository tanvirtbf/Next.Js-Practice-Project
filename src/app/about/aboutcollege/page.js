'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const AboutCollege = () => {
  const router = useRouter()
  const navigate = (route)=>{
    router.push(route)
  }
  return (
    <div>
      <h1>About Page for College</h1>
      <Link href={'/about/aboutstudent'}>Go to aboutStudent</Link>
      <button onClick={()=> navigate('/')}>Go to Home Page</button>
    </div>
  )
} 

export default AboutCollege
