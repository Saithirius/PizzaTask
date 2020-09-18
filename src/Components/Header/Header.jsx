import React from 'react';
import styles from './Header.module.css'

const Header = (props) => {
  return (
    <header>
      <div className={styles.contacts}>
        <img className={styles.logo} src='/img/logo.png' alt={'Pizza'}/>
        <address>Адрес: г. Город, ул. Улица, д. 1</address>
        <span className={styles.tel}>+7 900 000-00-00</span>
      </div>
      <h1>Pizza Task</h1>
    </header>
  )
}

export default Header