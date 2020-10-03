import React, {Component} from 'react';
import './TopNavbar.css';
import {Fade} from "react-reveal";
import {Typography} from "@material-ui/core";

class TopNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Typography variant="h5" className="title">Covictory AR</Typography>
        <Fade down>
          <div className="top-navbar"/>
        </Fade>
      </div>
    )
  }
}

export default TopNavbar;
