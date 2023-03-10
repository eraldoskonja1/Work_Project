import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'


const Header = () => {
    const [auth, setAuth] = useState('');
    const [userName, setUserName] = useState('');
    let navigate = useNavigate();
    useEffect (() =>{
       
        var userName = localStorage.getItem('userName');
        setUserName(userName);
    },
    []);
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link active">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/register" className="nav-link active">Register</Link>
      </li>
      <li className="nav-item">
      <Link to="/login" className="nav-link active">Login</Link>
      </li>
    </ul>
    <span className="navbar-text">Welcome: {userName}</span>
  </div>
</nav>
    )
}

export default Header;
