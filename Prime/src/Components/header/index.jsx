import { NavLink, Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import "./index.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
            <p>PrimeAgency</p>
          </Link>
        </div>
        <nav>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/about">
            <p>About</p>
          </NavLink>
          <NavLink to="/services">
            <p>Services</p>
          </NavLink>
          <NavLink to="/contact">
            <p>Contact</p>
          </NavLink>
        </nav>
        <div className="btn">
          <button>Get in Touch</button>
        </div>
      </div>
    </div>
  );
}
