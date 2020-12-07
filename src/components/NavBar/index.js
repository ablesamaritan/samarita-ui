import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import history from "../../history";
import "./styles.scss"

class NavBar extends React.Component {
  render() {
    const currentPath = window.location.pathname;
    console.log(currentPath === "/", currentPath);
    return (
      <Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-expand-md navbar-dark custom-bg"
          style={{ backgroundColor: "#1034a6" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a
              className="navbar-brand"
              onClick={() => history.push("/")}
              style={{ cursor: "pointer" }}
            >
              Able Samaritan
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li
                className={`nav-item ${currentPath === "/" ? "active" : ""}`}
                onClick={() => history.push("/")}
                style={{ cursor: "pointer" }}
              >
                <a className="nav-link">Home</a>
              </li>
              <li
                className="nav-item"
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/donations/list")}
              >
                <a className="nav-link">Monetary Donations</a>
              </li>
              <li
                className="nav-item"
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/donations/non-monetary")}
              >
                <a className="nav-link">Non-Monetary Donations</a>
              </li>
              <li
                className="nav-item"
                onClick={() => history.push("/about-us")}
                style={{ cursor: "pointer" }}
              >
                <a className="nav-link">About Us</a>
              </li>
              <li
                className="nav-item"
                onClick={() => history.push("/contact-us")}
                style={{ cursor: "pointer" }}
              >
                <a className="nav-link">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBar;
