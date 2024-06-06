"use client"
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const Student = () => {
  const {student} = useParams()
  const pathName = usePathname()
  return (
    <div>
      {
        pathName === "/studentlist/sadia" ? <h1>Hi Sadia</h1> : pathName === "/studentlist/maymuna" ? <h1>Hello Maymuna</h1> : pathName === "/studentlist/humaira" ? <h1>Bye Humaira</h1> : <h1>{`This is ${student}`}</h1>
      }
    </div>
  )
}

export default Student
