import {getInfo} from "../API/API";

let initialState = {
  courses: null
};

export const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-COURSES':
      return {
        ...state,
        courses: action.courses
      };
    default:
      return {
        ...state
      }
  }
};

let setCoursesActionCreator = (courses) => {
  return {
    type: `SET-COURSES`,
    courses
  }
};

export const getCoursesThunk = (city) => {
  return (dispatch) => {
    getInfo(city).then((response) => {
      dispatch(setCoursesActionCreator(response.data))
    });
  }
};

