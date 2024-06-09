import React from 'react'

const getUserName = async ()=> {
  let userName = await fetch("https://dummyjson.com/users");
  userName = await userName.json();
  return userName.users;
}

const UserName = async() => {
  const userName = await getUserName();
  return (
    <div>
      <h1>User Name</h1>
      {
        userName.map((item)=> <h3 key={item.id}>{item.firstName} {item.lastName}</h3>)
      }
    </div>
  )
}

export default UserName
