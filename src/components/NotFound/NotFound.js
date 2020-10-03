import React from "react";
import "./NotFound.css";
import PageNotFoundImage from "./images/PageNotFound.png";

const NotFound = () => {
  return (
    <div style={{width: '100%'}}>
      <div className="not-found">
        <img src={PageNotFoundImage} alt="Not Found" className="not-found"/>
      </div>
    </div>
  )
};

export default NotFound;
