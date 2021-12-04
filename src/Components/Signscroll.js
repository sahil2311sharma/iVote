import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleToggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className="navbar1">
      <div>
        <div>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link smooth to="#signin">
              \\//
            </Link>
          </li>
        </ul>

        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>{/* <h4>scroll</h4> */}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
