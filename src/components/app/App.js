import React from "react";
import DesktopLayout from "./../../templates/DesktopLayout";
import {Provider} from 'react-redux'
import {store} from "../../redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component{
  
  render(){
    return (
      <Provider store={store}>
      <div>
          <DesktopLayout/>
      </div>
      </Provider>
    )
  }
}