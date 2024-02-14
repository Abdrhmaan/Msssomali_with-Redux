import React from 'react'
import styles from "./Header.module.scss"


const Header = () => {


  return (
    <div className={styles.header}>
        <ul>
            <li className={styles.logo}><a href='#'>MSS SOMALI</a></li>
            <li><a href='#'>COMPATETITARS</a></li>
        </ul>
        </div>
  )
}

export default Header