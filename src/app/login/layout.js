"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const RootLayout = ({children}) => {
  const pathName = usePathname()
  return (
    <div>
      {
        pathName !== "/login/loginteacher" ? <h1>Common Layout for Login</h1> : <h1>Hello World!</h1>
      }
      {children}
    </div>
  )
}

export default RootLayout
