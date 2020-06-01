import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";
import {getCoursesThunk} from "../../redux/coursesReducer";

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCourses: (city) => dispatch(getCoursesThunk(city))
  }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;