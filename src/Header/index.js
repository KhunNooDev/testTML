import React from "react";
import { Link } from "react-router-dom";
import "bootstrap";
import "../1/bootstrap.css";

export default () => (
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <Link to="/" class="navbar-brand">
      TouchMyLike
    </Link>
    <button
      class="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="navbar-collapse collapse" id="navbarCollapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <Link to="/" class="nav-link">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/Class" class="nav-link">
            Class
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/About" class="nav-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
