import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import "./index.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="l-section">
          <h2>Navigation</h2>
          <nav>
            <div className="row">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>
            <div className="row">
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
          <button>Say Hi.</button>
        </div>
        <hr />
        <div className="c-section">
          <Link to="/">
            <img src={Logo} alt="Logo" />
            <p>PrimeAgency</p>
          </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ea
            debitis minima repudiandae facere suscipit id deserunt ullam aliquam
            nisi!
          </p>
          <span>Copyright &copy; 2024 PrimeAgency</span>
        </div>
        <hr />
        <div className="r-section">
          <h2>Contact</h2>
          <p>
            <span>
              <i className="fa-light fa-phone"></i>
            </span>
            +20 012 345 678
          </p>
          <p>
            <span>
              <i className="fa-light fa-envelope"></i>
            </span>
            info@PrimeAgency.com
          </p>
          <p>
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i className="fa-brands fa-whatsapp"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
