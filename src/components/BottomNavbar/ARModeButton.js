import React from "react";
import "./BottomNavbar.css";
import ARModeButtonImage from './images/ARModeButton.png';
import {showNotification} from "../../service-worker/NotificationServiceWorker";

export const ARModeButton = () => {
  return (
    <div className="ar-mode-container">
      <img alt="ar-mode" src={ARModeButtonImage} className="ar-mode-button" onClick={ async () => {
        const title = "Covictory AR";
        const options = {
          body: "Yay it works.",
          icon: ARModeButtonImage,
          badge: ARModeButtonImage
        };
        await showNotification(title, options)
      }}/>
    </div>
  )
};
