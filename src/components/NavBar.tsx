import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";
import logo from "../assets/logo.png";
import { X } from "lucide-react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`navbar ${showNavbar ? "visible" : "hidden"} ${
        scrolledUp ? "with-shadow" : ""
      }`}
    >
      <img src={logo} alt="Logo" className="logo" />

      <div className="nav-desktop">
        <ul className="nav-links">
          <li>
            <a href="#about" className="nav-link">
              <span>01. </span>About
            </a>
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
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <TbMenuDeep size={30} color="#d485ff" />
      </div>

      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          <X size={28} color="#fff" />
        </div>
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#about" className="nav-link">
              <span>01. </span>About
            </a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/">
              <span>02. </span>Work
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/">
              <span>03. </span>Experience
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/">
              <span>04. </span>Contact
            </Link>
          </li>
          <li>
            <div className="button">Resume</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
