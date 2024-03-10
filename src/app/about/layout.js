"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./about.css";
export default function Layout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <>
      {pathName !== "/about/aboutstudent" ? (
        <ul className="main">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/about/aboutcollege"}>About College</Link>
          </li>
          <li>
            <Link href={"/about/aboutstudent"}>About Student</Link>
          </li>
        </ul>
      ) : null}
      {children}
    </>
  );
}
