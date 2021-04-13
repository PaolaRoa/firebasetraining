import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, serviceWorker } from './app';
//importing firebase
import firebase from 'firebase/app'
//import firebase services, analytics
import 'firebase/analytics';
//importing firebase auth
import 'firebase/auth'
//importing firestore
import 'firebase/firestore';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCxJ0JU_aLOASOrbWGdcRdNeGibpfDrfFY",
    authDomain: "learnfirebase-2.firebaseapp.com",
    projectId: "learnfirebase-2",
    storageBucket: "learnfirebase-2.appspot.com",
    messagingSenderId: "922762347607",
    appId: "1:922762347607:web:53bbe828d83d3de8208f12",
    measurementId: "G-3KRXZQLVP2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
