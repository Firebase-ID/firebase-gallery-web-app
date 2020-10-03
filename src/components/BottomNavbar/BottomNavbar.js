import React, {Component} from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {HomeFilled, MessageFilled,} from '@ant-design/icons';
import {ARModeButton} from "./ARModeButton";
import './BottomNavbar.css';
import {withRouter} from "react-router-dom";

class BottomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: "",
    }
  }

  handleTabChange = (event, tabName) => {
    const {setPage} = this.props;
    this.setState({
      tabName: tabName
    });
    this.props.history.push(`/${tabName}`);
    setPage(tabName);
  };

  render() {
    const {tabName} = this.state;

    return (
      <div>
        <ARModeButton/>

        <BottomNavigation value={tabName} onChange={this.handleTabChange} className="bottom-navbar-container">

          <BottomNavigationAction label="Home" value="" icon={<HomeFilled className="bottom-navbar-button"/>}/>
          <BottomNavigationAction/>
          <BottomNavigationAction label="Notification" value="notification"
                                  icon={<MessageFilled className="bottom-navbar-button"/>}/>

        </BottomNavigation>
      </div>
    )
  }
}


export default withRouter(BottomNavbar);
