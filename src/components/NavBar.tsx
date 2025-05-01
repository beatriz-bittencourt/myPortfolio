import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowNavbar(true);
        setScrolledUp(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
        setScrolledUp(true);
      } else {
        setShowNavbar(false);
        setScrolledUp(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${showNavbar ? "visible" : "hidden"} ${
        scrolledUp ? "with-shadow" : ""
      }`}
    >
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <Link to="/">
            <span>01. </span>About
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>02. </span>Work
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>03. </span>Experience
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>04. </span>Contact
          </Link>
        </li>
        <li>
          <div className="button">Resume</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
