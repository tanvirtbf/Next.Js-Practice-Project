'use client'

export default function Student({params}) {
  const paramsLength = params.student.length 
  console.log(paramsLength)
  const items = params.student;
  return (
    <div>
      <h1>Student Details</h1>
      {items.map((item,i)=> <h3 key={i}>Name : {item}</h3>)}
    </div>
  )
}

