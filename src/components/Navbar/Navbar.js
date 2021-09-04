import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import MobileNav from "./MobileNav";




function Navbar() {
  

  return (
    <div className="nav-wrapper">
      <MobileNav/>
      <div className = "logo-section">
        <div className="site-logo">
        <img
          src={require("./tech-logo.png").default}
          alt="Yabré tech bent text"
          className="logo-image rounded-circle"
        />
      </div>
      <p className="site-name-nav" data-text ="YABRE TECH">
         YABRE TECH
        </p>
      </div>
      
      <nav className="nav nav-wide">
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li className="nav-link-item">
            <Link to="/projects" className="nav-link">
              Blog
            </Link>
          </li>
  
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;






/*const Navbar = () => {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <nav className="navbar">
      <div className="owner-name">
        <img
          src={require("./tech-logo.png").default}
          alt="curved text"
          className="rounded-circle"
        />
      </div>
      <ul className="nav-links" id={open ? "hidden" : ""}>
        <li className="nav-link-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-link-item">
          <Link to="/about" className="nav-link">
            About Me
          </Link>
        </li>

        <li className="nav-link-item">
          <a
            href="https://sylvainyabre.github.io/resume/"
            rel="noreferrer"
            target="_blank"
            className="nav-link"
          >
            Resume
          </a>
        </li>
        <li className="nav-link-item">
          <Link to="/projects" className="nav-link">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;*/
