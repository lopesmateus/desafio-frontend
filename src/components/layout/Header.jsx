// import { useState } from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/NTT_Data_Logo.svg'

function Header() {
  // const [count, setCount] = useState(0)

  return (
      <div className={styles.header}>
          <img src={logo} alt="" />
      </div>
  )
}

export default Header
