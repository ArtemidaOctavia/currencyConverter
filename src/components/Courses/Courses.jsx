import React from 'react';
import styles from './Courses.module.scss'
import {Container, Table} from "react-bootstrap";

export const Courses = (props) => {
  return (
    <Container className={styles.coursesHolder}>
      {props.courses ?
        <Table bordered hover>
          <thead>
          <tr>
            <th>Currency</th>
            <th>Sell</th>
            <th>Buy</th>
          </tr>
          </thead>
          <tbody>
          {
            Object.entries(props.courses[0]).map((item, index, arr) => {
              if (index <= 16 && (item[1] !== '0.0000')) {
                let currency = index % 2 === 0 ? item[0].substring(0, 3) : '';
                if (index % 2 === 0) {
                  return <tr key={index}>
                    <td>{currency}</td>
                    <td>{item[1]}</td>
                    <td>{arr[index + 1][1]}</td>
                  </tr>
                }
              }
            })
          }
          </tbody>
        </Table>
        : ''}
    </Container>
  )
};