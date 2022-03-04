import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import './main.js';

function Home() {
  return (
    <div className="Home">
     <div className="homeContainer">
        <NavLink to="/about-me" className="navLink">
          <button className="comeInBtn">Enter</button>
        </NavLink>
     </div>
    </div>
  );
}

export default Home;
