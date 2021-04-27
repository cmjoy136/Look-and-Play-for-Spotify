import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./Components/Pages/ErrorPage";
import Homepage from "./Components/Pages/Homepage";
import LoginPage from './Components/Pages/LoginPage'
import RedirectPage from "./Components/Pages/RedirectPage";

class App extends Component {

  
  render() {
    return( 
    
    <div className="App">
      <Switch>
        <Route
          path='/'
          exact={true}
          component={LoginPage}
          />
        <Route 
          path='/redirect'
          component={RedirectPage}
        />
        <Route
          path='/Homepage'
          component={Homepage}
        />
        <Route
          component={ErrorPage}
        />
      </Switch>
    </div>
    )
  }
}

export default App;
