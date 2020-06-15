import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import ConverterContainer from "./components/Converter/ConverterContainer";
import CoursesContainer from "./components/Courses/CoursesContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import store from "./redux/store";

function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
            <HeaderContainer/>
          <Route path={'/converter'} render={() => <ConverterContainer/>}/>
          <Route path={'/courses'} render={() => <CoursesContainer/>}/>
        </Provider>
      </BrowserRouter>
  );
}

export default App;