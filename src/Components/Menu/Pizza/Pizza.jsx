import React, {useState} from "react";
import styles from './Pizza.module.css'

const Pizza = (props) => {
  const [dough, setDough] = useState('Традиционное');
  const [size, setSize] = useState('30см');
  const [price, setPrice] = useState(props.pizza.price);

  const handleSubmit = (event) => {
    console.log('Тесто: ' + dough);
    event.preventDefault();
  }

  return (
    <div className={styles.pizza}>
      <figure>
        <img className={styles.pizzaPhoto} src={props.pizza.img} alt="Elephant at sunset" />
        <figcaption>{props.pizza.name}</figcaption>
      </figure>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.radioField}>
          <span
            className={dough === 'Традиционное' && styles.checkedField}
            onClick={() => setDough('Традиционное')}
          >Традиционное</span>
          <span
            className={dough === 'Тонкое' && styles.checkedField}
            onClick={() => setDough('Тонкое')}
          >Тонкое</span>
        </div>
        <div className={styles.radioField}>
          <span
            className={size === '30см' && styles.checkedField}
            onClick={() => setSize('30см')}
          >30см</span>
          <span
            className={size === '35см' && styles.checkedField}
            onClick={() => setSize('35см')}
          >35см</span>
          <span
            className={size === '40см' && styles.checkedField}
            onClick={() => setSize('40см')}
          >40см</span>
        </div>
        <div className={styles.priceRow}>
          <button className={styles.submitButton}>В КОРЗИНУ</button>
          <span className={styles.price}>{price} &#8381;</span>
        </div>
      </form>
    </div>
  )
}

export default React.memo(Pizza)