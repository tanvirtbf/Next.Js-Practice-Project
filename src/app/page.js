import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <User name = "Ahmed"/>
    </main>
  );
}

const User = (props)=>{
  return (
    <div>
      <h2>User name is Tanvir {props.name}</h2>
    </div>
  )
}