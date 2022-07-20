import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartProvider from './Context/CartContext';


import { initializeApp } from "firebase/app";
const firebaseConfig = {
apiKey: "AIzaSyD9hrq4w_WnSlv22GHc3PQkZHJXkc7CXUg",
authDomain: "perfustore-monte.firebaseapp.com",
projectId: "perfustore-monte",
storageBucket: "perfustore-monte.appspot.com",
messagingSenderId: "258148731058",
appId: "1:258148731058:web:bce16a075dd532b31761ab"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
