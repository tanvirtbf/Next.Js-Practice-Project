"use client"
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  const navigate = (route)=>{
    router.push(route)
  }
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <Link href={"/login"}>Go to Login Page</Link>
      <Link href={"/about"}>Go to About Page</Link>
      <button onClick={()=> navigate('login')}>Go to Login page</button>
      <button onClick={()=> navigate('about')}>Go to About Page</button>
      <button onClick={()=> navigate('/productlist')}>Product List</button>
    </main>
  );
}
