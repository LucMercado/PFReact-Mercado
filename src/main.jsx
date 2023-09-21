import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBBFOlVofi9bn8wlP--RlO6ekfQ_h-4iBY",
  authDomain: "hym-materiales.firebaseapp.com",
  projectId: "hym-materiales",
  storageBucket: "hym-materiales.appspot.com",
  messagingSenderId: "665738936029",
  appId: "1:665738936029:web:9d76b6bdf7151a1de76534",
  measurementId: "G-QS9D1DS0KG"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
