import React from 'react'
import Link from 'next/link'
export default function Layout({children}) {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/login"}>Login Main</Link>
        </li>
        <li>
          <Link href={"/login/loginstudent"}>Student Login</Link>
        </li>
        <li>
          <Link href={"/login/logincollege"}>College Login</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}
