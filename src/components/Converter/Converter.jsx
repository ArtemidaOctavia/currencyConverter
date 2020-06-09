import React from 'react';
import styles from './Converter.module.scss'

export const Converter = (props) => {

  if (props.sum && props.courses) {
    props.setConverted((props.sum / props.courses[0][`${props.currency}_out`]).toFixed(2));
  }

  return <div>

    <div><input className={styles.input} onChange={(event) => {
      props.setSum(event.target.value);
    }} placeholder={'BYR'}/> <span>to {props.currency} </span><span>{

      props.converted && props.currency ? `= ${props.converted}` : ''

    }</span></div>
    <div className={styles.currencyHolder}>
    {props.courses ?
      Object.entries(props.courses[0]).map((item, index) => {
        if (index <= 16 && (item[1] !== '0.0000')) {
          let currency = index % 2 === 0 ? item[0].substring(0, 3) : '';
          if (index % 2 === 0) {
            return <div className={styles.currency} onClick={() => {
              props.setCurrency(currency);
            }} key={index}>{currency}</div>
          }
        }
      }) : ''
    }
    </div>
  </div>
};