import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li className="footer-li">
          <a
            className="footer-link"
            href="https://github.com/box-monkey"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li className="footer-li">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/roberto-gasparin-611a64236"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
