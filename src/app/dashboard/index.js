import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
  const router = useRouter()
  const navigate = (route)=>{
    
  }
  return (
    <div>
      Hello Dashboard!
      <button>Home</button>
    </div>
  )
}

export default Dashboard
