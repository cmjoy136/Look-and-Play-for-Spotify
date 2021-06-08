import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getDeviceID } from "./Actions/AuthActions";
import ErrorPage from "./Containers/ErrorPage";
import Homepage from "./Containers/Homepage";
import LoginPage from "./Containers/LoginPage";
import RedirectPage from "./Containers/RedirectPage";

class App extends Component {
  componentDidMount() {
    let expireTime;
    let token;
    try {
      if(localStorage.getItem('params') !== null){
        expireTime = JSON.parse(localStorage.getItem("expireTime"));

      }
    } catch (err) {
      console.log(err);
      expireTime = "0";
    }
    this.setState({ expireTime, token });
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
            render={(props) => (
              <LoginPage  {...props} />
            )}
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
            path="/home"
            render={(props) => (
              <Homepage
                {...props}
                isValidSession={this.isValidSession}
                playbackInfo={this.getCurrentPlaybackInfo}
              />
            )}
          />
          <Route render={() => <ErrorPage />} />
          {/* Route for profile */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { deviceID: state.auth.deviceID };
};
const mapDispatchToProps = {
  getDeviceID,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
