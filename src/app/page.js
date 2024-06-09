"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const navigate = (route)=> {
    router.push(route)
  }
  return (
    <main>
      <h1>Hello World! my boy</h1>
      <button onClick={()=> router.push("/login")}>Login</button>
      <br /><br />
      <button onClick={()=> navigate("/about")}>About</button>
    </main>
  );
}
