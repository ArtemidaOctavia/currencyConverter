import React from 'react';
import {connect} from 'react-redux';
import {Courses} from "./Courses";
import {getCoursesThunk} from "../../redux/coursesReducer";

const renderTableRow = (currencyDescription, index, currencies) => {
  if (index <= 16 && (currencyDescription[1] !== '0.0000')) {
    let currency = index % 2 === 0 ? currencyDescription[0].substring(0, 3) : '';
    if (index % 2 === 0) {
      return <tr key={index}>
        <td>{currency}</td>
        <td>{currencyDescription[1]}</td>
        <td>{currencies[index + 1][1]}</td>
      </tr>
    }
  }
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses.courses,
    renderTableRow: renderTableRow
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCourses: (city) => dispatch(getCoursesThunk(city))
  }
};

const CoursesContainer = connect(mapStateToProps, mapDispatchToProps)(Courses);
export default CoursesContainer;