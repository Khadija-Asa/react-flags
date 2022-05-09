import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink className={(nav) => (nav.isActive ? "nav-active" : "")} to="/">
          <li>accueil</li>
        </NavLink>
        <NavLink className={(nav) => (nav.isActive ? "nav-active" : "")} to="/about">
          <li>à propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;