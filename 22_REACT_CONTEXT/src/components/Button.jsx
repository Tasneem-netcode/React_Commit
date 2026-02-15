import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

   const [theme , setTheme] =  useContext(ThemeDataContext)
    const changeTheme = () => {
         setTheme(theme === 'Light' ? 'Dark' : 'Light')
    }
  return (
    <div className='btn'>
        <button onClick={changeTheme}>Toggle Theme {theme}</button>
    </div>
  )
}

export default Button