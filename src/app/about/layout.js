import Link from 'next/link'
import './about.css'
export default function Layout({ children }) {
  return (
    <>
      <ul className="main">
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/login'}>Login</Link>
        </li>
        <li>
          <Link href={'/about/aboutcollege'}>About College</Link>
        </li>
        <li>
          <Link href={'/about/aboutstudent'}>About Student</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
