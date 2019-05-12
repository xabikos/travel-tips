import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import authentication from 'react-azure-adb2c';

authentication.initialize({
  // optional, will default to this
  instance: 'https://login.microsoftonline.com/tfp/',
  // your B2C tenant
  tenant: 'greatspeakers.onmicrosoft.com',
  // the policy to use to sign in, can also be a sign up or sign in policy
  signInPolicy: 'B2C_1_travel_tips_signup_signin',
  // the policy to use for password reset
  //resetPolicy: 'mypasswordresetpolicy',
  // the the B2C application you want to authenticate with (that's just a random GUID - get yours from the portal)
  applicationId: 'deac661b-90d7-47a1-8fd8-9427aaeede45',
  // where MSAL will store state - localStorage or sessionStorage
  cacheLocation: 'sessionStorage',
  // the scopes you want included in the access token
  scopes: ['https://greatspeakers.onmicrosoft.com/api/test.write', 'https://greatspeakers.onmicrosoft.com/api/test.read'],
  // optional, the redirect URI - if not specified MSAL will pick up the location from window.href
  redirectUri: 'http://localhost:3000',
  // optional, the URI to redirect to after logout
  postLogoutRedirectUri: window.location.origin
});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


