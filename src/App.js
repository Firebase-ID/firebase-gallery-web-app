import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import * as firebase from "./services/Firebase"
import {Loading, Dashboard, Notification} from "./containers";
import {TopNavbar, Background, BottomNavbar, NotFound} from "./components";
import {withRouter} from "react-router-dom"
import {Breakpoint} from "react-socks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      isLoading: true,
      isLoggedIn: false,
      user: {},
      userData: {},
    }
  }

  componentDidMount = async () => {
    await this.checkIsLoggedIn();
  };

  checkIsLoggedIn = async () => {
    await firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          console.log(user);
          await firebase.db.ref('users').orderByChild('uid').equalTo(user.uid)
            .on('value', snapshot => {
              let userData = [];

              if (snapshot.exists()) {
                snapshot.forEach((snap) => {
                  userData.push(snap.val())
                });
                // speakStart("Welcome to XStream XR");
              }

              else {
                userData = [{
                  uid: user.uid,
                  displayName: user.displayName,
                  email: user.email,
                  photoURL: user.photoURL,
                }]
              }

              this.setState({
                userData: userData[0],
                user: user,
                isLoading: false,
                isLoggedIn: true
              });
            })
        } catch (error) {
          this.setState({
            readError: error.message, loadingChats: false,
            user: {},
            userData: {},
            isLoading: false,
            isLoggedIn: false
          })
        }
      } else {
        this.setState({
          user: {},
          userData: {},
          isLoading: false,
          isLoggedIn: false
        })
      }
    })
  };

  setPage = (page) => {
    this.setLoading(true);
    setTimeout(() => {
      this.setLoading(false);
    }, 500);
    this.setState({page});
  };

  setLoading = (isLoading) => {
    this.setState({isLoading})
  };

  render() {
    const {isLoading, isLoggedIn, userData} = this.state;
    console.log(this.state)
    return (
      <div>

        <Breakpoint small down>

          {isLoading && (<Loading/>)}
          <TopNavbar/>
          <Background/>

          <div className="page-container">
            <Switch>
              {!isLoggedIn && !isLoading && (
                <StyledFirebaseAuth
                  uiConfig={firebase.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              )}

              {isLoggedIn && !isLoading && (
                <>
                  <Route
                    exact
                    path="/"
                    render={(props) => (
                      <Dashboard {...props}/>
                    )}
                  />

                  <Route
                    exact
                    path="/notification"
                    render={(props) => (
                      <Notification {...props}/>
                    )}
                  />
                </>
              )}

              {!isLoading && (
                <Route path="*" render={() => (
                  <NotFound/>
                )}/>
              )}
            </Switch>
          </div>
          <BottomNavbar setPage={this.setPage}/>
        </Breakpoint>

        <Breakpoint medium up>
          <h2>Sorry, only available on Mobile Devices</h2>
        </Breakpoint>


      </div>
    )
  }
}

export default withRouter(App);
