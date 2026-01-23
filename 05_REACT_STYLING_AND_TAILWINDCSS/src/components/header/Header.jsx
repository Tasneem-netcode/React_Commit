import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.head}>
    <h3>Sheriyans</h3>
    <button className={styles.btn}>Home</button>  
    </div>
  )
}

export default Header