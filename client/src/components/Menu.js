import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/add-book">Add Books</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
