"use client"
import Link from "next/link";
import { useEffect } from "react";
export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href={"/productlist"}>Go to Product List</Link>
    </main>
  );
}
