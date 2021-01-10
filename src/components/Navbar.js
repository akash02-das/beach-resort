import React, { Component } from "react";
import logo from "../images/logo.svg";
import "../styles/navbar.scss";
import { FaAlignRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <NavLink to="/">
              <img src={logo} alt="Beach Resort" />
            </NavLink>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <NavLink exact to="/" activeClassName="active-nav">Home</NavLink>
            </li>
            <li>
              <NavLink to="/rooms" activeClassName="active-nav">Rooms</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
