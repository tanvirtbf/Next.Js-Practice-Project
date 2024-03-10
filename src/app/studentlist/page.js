import Link from "next/link";
export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href={"/studentlist/tanvir"}>Tanvir</Link>
        </li>
        <li>
          <Link href={"/studentlist/sabbir"}>Sabbir</Link>
        </li>
        <li>
          <Link href={"/studentlist/rifat"}>Rifat</Link>
        </li>
        <li>
          <Link href={"/studentlist/riduan"}>Riduan</Link>
        </li>
        <li>
          <Link href={"/studentlist/hasib"}>Hasib</Link>
        </li>
      </ul>
    </div>
  );
}
