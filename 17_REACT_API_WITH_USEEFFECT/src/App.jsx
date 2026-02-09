import React from 'react'
import { useEffect, useState } from 'react'
const App = () => {
  const [users, setusers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setusers(data))
  } , [])
  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default App