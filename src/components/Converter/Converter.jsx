import React from 'react';
import styles from './Converter.module.scss'
import {DropdownButton, FormControl, InputGroup, Dropdown, Container} from "react-bootstrap";

export const Converter = (props) => {

  if (props.sum && props.courses) {
    props.setConverted((props.sum / props.courses[0][`${props.currency}_out`]).toFixed(2));
  }

  return <Container className={`${styles.converterHolder}; col-xl-3`}>
    <InputGroup className="mb-3">
      <FormControl value={props.sum} type="number" className={styles.input} aria-describedby="basic-addon1"
                   onChange={(event) => {
                     props.setSum(event.target.value);
                   }} placeholder={'BYR'}/>

    </InputGroup>
    <InputGroup className="mb-3">
      <FormControl readOnly value={props.converted && props.currency ? `${props.converted}` : ''}/>
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title={props.currency}
      >
        {props.courses ?
          Object.entries(props.courses[0]).map((item, index) => {
            if (index <= 16 && (item[1] !== '0.0000')) {
              let currency = index % 2 === 0 ? item[0].substring(0, 3) : '';
              if (index % 2 === 0) {
                return <Dropdown.Item onClick={() => {
                  props.setCurrency(currency);
                }} key={index}>{currency}</Dropdown.Item>
              }
            }
          }) : ''
        }
      </DropdownButton>
    </InputGroup>
  </Container>
};