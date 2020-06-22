import React from 'react';
import {Converter} from "./Converter";
import {connect} from 'react-redux';
import {setConverted, setCurrency, setSum} from "../../redux/converterReducer";
import {getCoursesThunk} from "../../redux/coursesReducer";

const mapStateToProps = (state) => {
  return {
    courses: state.courses.courses,
    currency: state.converter.currency,
    converted: state.converter.converted,
    sum: state.converter.sum,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrency: (currency) => dispatch(setCurrency(currency)),
    setConverted: (converted) => dispatch(setConverted(converted)),
    setCourses: (city) => dispatch(getCoursesThunk(city)),
    setSum: (sum) => dispatch(setSum(sum)),
  }
};

const ConverterContainer = connect(mapStateToProps, mapDispatchToProps)(Converter);
export default ConverterContainer;