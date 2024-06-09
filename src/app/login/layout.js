"use client"
import { usePathname } from "next/navigation"

export default function LoginLayout({children}){
  const pathName = usePathname();

  return (
    <>
      {
        pathName !== "/login" && <h1>Login Layout</h1>
      }
      {children}
    </>
  )
}