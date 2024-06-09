"use client"
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import React from 'react'

const Login = () => {
  const router = useRouter()
  return (
    <div className='divs'>
      Login Page 
      <br />
      <br />     
      <button onClick={()=> router.push("/")}>Home</button>
      <br />
      <br />
      <Script 
        src='/hello.js'
        onLoad={()=> {
          console.log("file loaded")
        }}
      />
    </div>
  )
}

export default Login
