import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqoMQLifHG4SCkDUqQpwaTm5R0825PcoY",
    authDomain: "gameflix-c788b.firebaseapp.com",
    databaseURL: "https://gameflix-c788b-default-rtdb.firebaseio.com",
    projectId: "gameflix-c788b",
    storageBucket: "gameflix-c788b.appspot.com",
    messagingSenderId: "729375718862",
    appId: "1:729375718862:web:dffa2bdd7369e7c7dd3f9f",
    measurementId: "G-K8NY1KLPJW"
};
const rootElement = document.getElementById("root");

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
