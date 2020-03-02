import React from "react";
import { NavLink } from "react-router-dom";
import "../Main.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="navigation">
        <NavLink to="/">Movie</NavLink>
        <NavLink to="/TV">T V</NavLink>
        <NavLink to="/Search">Search</NavLink>
      </div>
    );
  }
}
