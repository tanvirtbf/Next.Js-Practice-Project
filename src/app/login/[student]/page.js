"use client"
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const StudentLogin = () => {
  const {student} = useParams();
  const pathName = usePathname()
  console.log(student)
  return (
    <div>
      <h1>{student} <br /> {pathName}</h1>
      Student Login Page
    </div>
  )
}

export default StudentLogin
