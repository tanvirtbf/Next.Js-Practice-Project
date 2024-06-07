"use client"
import { useRouter } from "next/navigation";
import "./styles.css"

const Dashboard = () => {
  const router = useRouter();
  const navigate = (route) => {
    router.push(route);
  };
  return (
    <div>
      Hello Dashboard!
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default Dashboard;
