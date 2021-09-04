import React,{useState} from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";



const MobileNav = () => {
  const [open, setOpen] = useState(false);
  

  const mobileLinks = (
    <nav className="nav-menu">
      <ul className="mobile-links">
        <li className="mobile-link-item">
          <GrClose className="close-icon" onClick={() => setOpen(!open)} />
        </li>

        <li className="mobile-link-item" onClick={() => setOpen(!open)}>
          <Link to="/" className="mobile-link">
            Home
          </Link>
        </li>
        <li className="mobile-link-item" onClick={() => setOpen(!open)}>
          <Link to="/about" className="mobile-link">
            About
          </Link>
        </li>
        <li className="mobile-link-item" onClick={() => setOpen(!open)}>
          <div>
            <Link to="/projects" className="mobile-link">Blog</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
  return (
    <div className="nav mobile-menu">
      {open ? (
        mobileLinks
      ) : (
        <GiHamburgerMenu className="menu-icon" onClick={() => setOpen(!open)} />
      )}
    </div>
  );
};

export default MobileNav;

