import { Link } from "react-router-dom";
import "./index.scss";

export default function Menu() {
  return (
    <div className="menu-Bar">
      <div className="container">
        <nav>
          <Link to="/">
            <i className="fa-light fa-pen"></i>
            <div className="Tooltip">
              <p className="tooltip-Text">Home</p>
            </div>
          </Link>
          <Link to="/notes">
            <i className="fa-light fa-memo-pad"></i>
            <div className="Tooltip">
              <p className="tooltip-Text">Notes</p>
            </div>
          </Link>
          <Link to="/explore">
            <i className="fa-light fa-search"></i>
            <div className="Tooltip">
              <p className="tooltip-Text">Explore</p>
            </div>
          </Link>
          <Link to="/contact">
            <i className="fa-light fa-location-dot"></i>
            <div className="Tooltip">
              <p className="tooltip-Text">Contact</p>
            </div>
          </Link>
          <hr />
          <span>
            <Link to={`/profile`}>
              <i className="fa-light fa-user"></i>
              <div className="Tooltip">
                <p className="tooltip-Text">Profile</p>
              </div>
            </Link>
            <Link to="/settings">
              <i className="fa-light fa-gear"></i>
              <div className="Tooltip">
                <p className="tooltip-Text">Settings</p>
              </div>
            </Link>
          </span>
        </nav>
      </div>
    </div>
  );
}
