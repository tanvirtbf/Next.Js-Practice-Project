"use client"
import React from 'react'

const Button = ({price}) => {
  return (
    <div>
      <button onClick={()=> alert(`Price is : ${price}`)}>Click Me</button>
    </div>
  )
}

export default Button
