import React from 'react'
import Image from 'next/image'
import Profile from '../../../public/next.svg'
const ImageTest = () => {
  console.log(Profile)
  return (
    <div>
      <h1>Image Optimization in Next</h1>
      <Image src={Profile} alt='basic-image' height={120} width={500}/>
    </div>
  )
}
export default ImageTest
