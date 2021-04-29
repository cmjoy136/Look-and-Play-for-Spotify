import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./Components/Pages/ErrorPage";
import Homepage from "./Components/Pages/Homepage";
import LoginPage from "./Components/Pages/LoginPage";
import RedirectPage from "./Components/Pages/RedirectPage";

class App extends Component {
  state = {
    expireTime: "0",
  };

  componentDidMount() {
    let expireTime;
    try {
      expireTime = JSON.parse(localStorage.getItem("expireTime"));
    } catch (err) {
      console.log(err);
      expireTime = "0";
    }
    this.setState({ expireTime });
  }

  setExpireTime = (expireTime) => {
    this.setState({ expireTime });
  };

  isValidSession = () => {
    const currentTime = new Date().getTime();
    const expireTime = this.state.expireTime;
    const validSession = currentTime < expireTime;
    return validSession;
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact={true}
            component={LoginPage}
          />
          <Route
            path="/redirect"
            render={(props) => (
              <RedirectPage
              isValidSession={this.isValidSession}
              setExpireTime={this.setExpireTime}
              {...props}
              />
            )}
          />
          <Route
            path="/Homepage"
            render={(props) => (
              <Homepage {...props} isValidSession={this.isValidSession} />
            )}
          />
          <Route render={() => <ErrorPage/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
