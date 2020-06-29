import React from 'react';
import {Converter} from "./Converter";
import {connect} from 'react-redux';
import {setConverted, setCurrency, setSum} from "../../redux/converterReducer";
import {getCoursesThunk} from "../../redux/coursesReducer";
import {Dropdown} from "react-bootstrap";

const renderDropdownItem = (currencyDescription, index, setCurrency) => {
  if (index <= 16 && (currencyDescription[1] !== '0.0000')) {
    let currency = index % 2 === 0 ? currencyDescription[0].substring(0, 3) : '';
    if (index % 2 === 0) {
      return <Dropdown.Item onClick={() => {
        setCurrency(currency);
      }} key={index}>{currency}</Dropdown.Item>
    }
  }
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses.courses,
    currency: state.converter.currency,
    converted: state.converter.converted,
    sum: state.converter.sum,
    renderDropdownItem: renderDropdownItem
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