import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Notifications} from 'react-push-notification';
import {BreakpointProvider} from 'react-socks';
import {BrowserRouter} from "react-router-dom";
import {CacheServiceWorker, NotificationServiceWorker} from "./service-worker";

ReactDOM.render(
    <BreakpointProvider>
      <Notifications/>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </BreakpointProvider>,
  document.getElementById('root')
);


if ('serviceWorker' in navigator && 'PushManager' in window) {
  // CacheServiceWorker.register();
  // NotificationServiceWorker.register();
} else {
  console.log("Sorry, try to update your chrome");
}
