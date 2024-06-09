"use client"
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const StudentLogin = () => {
  const {student} = useParams();
  console.log(student)
  console.log(student)
  return (
    <div>
      {
        student.map((item,i)=> <h1 key={i}> {i+1}. Name : {item}</h1>)
      }
    </div>
  )
}

export default StudentLogin
