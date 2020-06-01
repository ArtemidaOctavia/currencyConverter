import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

export const Header = (props) => {
  props.setCourses('Минск');
  return (
      <nav>
        <NavLink className={styles.navlink} to={`/converter`}>Converter</NavLink>
        <NavLink className={styles.navlink} to={`/courses`}>Courses</NavLink>
      </nav>
  )
};