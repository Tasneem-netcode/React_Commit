import React from 'react'

const App = () => {
  // sessionStorage.clear()
  // localStorage.clear()

  localStorage.setItem('user' , 'Tasneem332')
  localStorage.setItem('password' , '123456')

  const user = localStorage.getItem('user')
  console.log(user);

  localStorage.removeItem('user')
  
  const user2 = {
     username: 'Tasneem332',
     password: '123456',
     age: 21
  }

  localStorage.setItem('user2' , JSON.stringify(user2))

  const newuser = localStorage.getItem('user2')
  console.log(JSON.parse(newuser));

  return (
    <div>
      <h1>Local Storage</h1>
    </div>
  )
}

export default App