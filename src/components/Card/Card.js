import React from 'react';
import styles from './Card.module.css';


const card = (props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card_title}>{props.title}</h3>
      {props.card_body}
    </div>
 )
};


export default card;
