"use client"
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const routing = (route)=>{
    router.push(route)
  }

  return (
    <main>
      <h1>Basic Routing | Make New Page</h1>
      <Link href={"/login"}>Login Page</Link>
      <br />
      <Link href={"/about"}>About Page</Link>
      <br />
      <br />
      <button onClick={()=> routing("/login")}>Login</button>
      <br />
      <br />
      <button onClick={()=> routing("/about")}>About</button>
    </main>
  );
}
