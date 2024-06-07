import Link from "next/link";

const StudentList = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/studentlist/tanvir"}>Tanvir</Link>
        </li>
        <li>
          <Link href={"/studentlist/sadia"}>Sadia</Link>
        </li>
        <li>
          <Link href={"/studentlist/maymuna"}>Maymuna</Link>
        </li>
        <li>
          <Link href={"/studentlist/humaira"}>Humaira</Link>
        </li>
        <li>
          <Link href={"/studentlist/ayesha"}>Ayesha</Link>
        </li>
        <li>
          <Link href={"/studentlist/khadija"}>Khadija</Link>
        </li>
      </ul>
    </div>
  );
};

export default StudentList;
