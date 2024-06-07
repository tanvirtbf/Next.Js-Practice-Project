import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
  const router = useRouter()
  return (
    <div>
      Hello Dashboard!
      <button>Home</button>
    </div>
  )
}

export default Dashboard
