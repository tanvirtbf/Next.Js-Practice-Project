"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
const RootLayout = ({children}) => {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <div>
      {
        pathName !== "/login/loginteacher" && <h1>Common Layout for Login</h1>
      }
      {children}
    </div>
  )
}

export default RootLayout
