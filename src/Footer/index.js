import React from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

import "./footer.css";

export default () => (
  <div>
    <footer class="footer-distributed">
      <div class="footer-left">
        <h1>TouchMylike</h1>
        <p class="footer-links">
          -
          <Link to="/"> Home </Link>- -
          <Link to="/Contact">Contact</Link>- -
          <Link to="/About">About</Link>
          -
        </p>
        <p class="footer-company-name">&copy; Copyright by TouchMylike </p>
      </div>

      <div class="footer-center">
        <div>
          <p>
            <a href="mailto:touchmtlike@studio.com">touchmtlike@studio.com</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <div class="footer-icons">
          <SocialIcon url="http://facebook.com/TouchMyLikeStudio/" />
          <SocialIcon url="http://youtube.com" />
          <SocialIcon url="https://instagram.com" />
        </div>
      </div>
    </footer>
  </div>
);
