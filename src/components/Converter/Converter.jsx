import React from 'react';
import styles from './Converter.module.css'

export const Converter = (props) => {
  return <div>

    <div><input className={styles.input} onChange={(event) => {
      props.setSum(event.target.value);
      props.setConverted((event.target.value / props.courses[0][`${props.currency}_out`]).toFixed(2))
    }} placeholder={'BYR'}/> <span>to {props.currency ? props.currency : '...'} </span><span>{

      props.converted ? `= ${props.converted}` : ''

    }</span></div>
    <div className={styles.currencyHolder}>
    {props.courses ?
      Object.entries(props.courses[0]).map((item, index) => {
        if (index <= 16) {
          let currency = index % 2 === 0 ? item[0].substring(0, 3) : '';
          if (index % 2 === 0) {
            return <div className={styles.currency} onClick={() => {
              props.setCurrency(currency)
            }} key={index}>{currency}</div>
          }
        }
      }) : ''
    }
    </div>
    <div>
      <div>
        <button className={styles.button} onClick={() =>
          props.setConverted((props.sum / props.courses[0][`${props.currency}_out`]).toFixed(2))
        }>convert
        </button>
      </div>
    </div>
  </div>
};