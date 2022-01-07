import React,{useState} from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import "../../index.css";



const MobileNav = () => {
  const [open, setOpen] = useState(false);
  

  const mobileLinks = (
    <nav className="nav-menu">
       <GrClose className="close-icon" onClick={() => setOpen(!open)} />
      <ul className="mobile-links justify-center">
       

        <li className="mobile-link-item center" onClick={() => setOpen(!open)}>
          <Link to="/" className="mobile-link center">
            Home
          </Link>
        </li>
        <li className="mobile-link-item text-center" onClick={() => setOpen(!open)}>
          <Link to="/about" className="mobile-link text-center">
            About
          </Link>
        </li>
        <li className="mobile-link-item text-center" onClick={() => setOpen(!open)}>
          <div>
            <Link to="/projects" className="mobile-link text-center">Blog</Link>
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

