import React from "react";
import styles from './Footer.module.css'

const Footer = (props) => {
  return (
    <footer>
      <address>Адрес: г. Город, ул. Улица, д. 1</address>
      <span className={styles.tel}>+7 900 000-00-00</span>
    </footer>
  )
}

export default Footer