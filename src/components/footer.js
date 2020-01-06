import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Sapphire Group</h3>
        <p>
          Contact <br /> info@sapphiregroup.com
        </p>
        <ul>
          <li>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
