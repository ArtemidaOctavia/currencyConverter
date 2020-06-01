import React from 'react';
import {connect} from 'react-redux';
import {Courses} from "./Courses";
import {getCoursesThunk} from "../../redux/coursesReducer";

const mapStateToProps = (state) => {
  return {
      courses: state.courses.courses
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCourses: (city) => dispatch(getCoursesThunk(city))
  }
};

const CoursesContainer = connect(mapStateToProps, mapDispatchToProps)(Courses);
export default CoursesContainer;