import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
      <div className="Nav">
           <div className="navContainer">
                <NavLink to="/" className="navLink">
                    Home
                </NavLink>
                <NavLink to="/about-me" className="navLink">
                    About me
                </NavLink>
                <NavLink to="/work" className="navLink">
                    Work
                </NavLink>
                <NavLink to="/cv" className="navLink">
                    CV
                </NavLink>
                <NavLink to="/contact" className="navLink">
                    Contact me!
                </NavLink>
            </div>
    </div>
  );
}

export default Nav;