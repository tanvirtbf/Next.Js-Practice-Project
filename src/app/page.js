import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World! my boy</h1>
      <Link href={"/login"}>Login</Link>
      <br /><br />
      <Link href={"/about"}>About</Link>
      
    </main>
  );
}
