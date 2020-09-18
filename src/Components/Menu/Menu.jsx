import React from "react";
import styles from './Menu.module.css'
import Pizza from "./Pizza/Pizza";
import {connect} from "react-redux";

const Menu = (props) => {
  return (
    <div className={styles.menu}>
      <h2>Меню</h2>
      <div className={styles.products}>
        {/*<Pizza />*/}
        {props.pizza.map(pizza => <Pizza pizza={pizza}/>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pizza: state.menu.pizza
  };
};

export default connect(mapStateToProps, {})(React.memo(Menu))