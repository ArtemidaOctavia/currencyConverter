import React from 'react';
import styles from './Courses.module.scss'
import {Container, Table} from "react-bootstrap";

export const Courses = (props) => {
  return (
    <Container className={styles.coursesHolder}>
      {props.courses &&
      <Table bordered hover>
        <thead>
        <tr>
          <th>Currency</th>
          <th>Buy</th>
          <th>Sell</th>
        </tr>
        </thead>
        <tbody>
        {
          Object.entries(props.courses).map((currencyDescription, index, currencies) => {
            return props.renderTableRow(currencyDescription, index, currencies);
          })
        }
        </tbody>
      </Table>
      }
    </Container>
  )
};