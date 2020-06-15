import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.scss'
import {Button, Container, Nav} from "react-bootstrap";

export const Header = (props) => {
  props.setCourses('Минск');
  return (
    <Container>
      <Nav className={'navbar navbar-expand-sm justify-content-center'}>
        <NavLink className={styles.navlink} to={`/converter`}><Button variant={'secondary'}>Converter</Button></NavLink>
        <NavLink className={styles.navlink} to={`/courses`}><Button variant={'secondary'}>Courses</Button></NavLink>
      </Nav>
    </Container>
  )
};