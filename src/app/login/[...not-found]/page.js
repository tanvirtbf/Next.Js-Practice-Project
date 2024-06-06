"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const NotFound = () => {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <div>
      Not Found Vai!
    </div>
  )
}

export default NotFound
