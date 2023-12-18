import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import NavLinks from "../mock/NavLinks";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <Link to="/" className="navbar-brand">
            <img src="/img/logo.png" alt="logo" width="130" />
          </Link>

          <NavbarLinks isOpen={isOpen} setIsOpen={setIsOpen} />

          <NavbarBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </header>
  );
};

const NavbarLinks = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className={`navbar-nav ${isOpen ? "active" : ""}`}>
      {NavLinks.map((link) => (
        <li key={link.text}>
          <Link to={link.href} className="nav-link" onClick={toggleMenu}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const NavbarBtn = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={`menu-toggle-btn ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <span className="line one"></span>
      <span className="line two"></span>
      <span className="line three"></span>
    </button>
  );
};
