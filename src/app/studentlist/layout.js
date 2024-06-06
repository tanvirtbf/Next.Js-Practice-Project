import React from 'react'

const RootLayout = ({children}) => {
  return (
    <div>
      <h1>Student List</h1>
      {children}
    </div>
  )
}

export default RootLayout
