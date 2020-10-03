import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Loading, Dashboard, Notification} from "./containers";
import {TopNavbar, Background, BottomNavbar, NotFound} from "./components";
import {Breakpoint} from "react-socks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      isLoading: false
    }
  }

  componentDidMount = async () => {
    // const serviceWorker = await serviceWorkerModule.start();
    // serviceWorkerModule.showLocalNotification('This is title', 'this is the message', serviceWorker);
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
    const {isLoading} = this.state;
    return (
      <div>

        <Breakpoint small down>

          {isLoading && (<Loading/>)}
          <TopNavbar/>
          <Background/>

          <div className="page-container">
            <Switch>
              <Route
                // exact
                path="/home"
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

              <Route path="*" render={() => (
                <NotFound/>
              )}/>
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

export default App;
