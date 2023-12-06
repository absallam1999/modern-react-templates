import { Link, NavLink, useNavigate } from "react-router-dom";
import "./index.scss";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="container">
          <div className="logo">
            <Link to="/">
              <h2>
                <span>طو</span>رنى
              </h2>
            </Link>
          </div>
          <div className="menu">
            <NavLink to="/">
              <p>الرئيسية</p>
            </NavLink>
            <NavLink to="/about">
              <p>من نحن</p>
            </NavLink>
            <NavLink to="/terms">
              <p>الشروط والاستخدام</p>
            </NavLink>
            <NavLink to="/policy">
              <p>سياسة الموقع</p>
            </NavLink>
            <NavLink to="/contact">
              <p>تواصل معنا</p>
            </NavLink>
          </div>
          <div className="btn">
            <button onClick={() => navigate("/login")}>تسجيل دخول</button>
          </div>
      </div>
    </div>
  );
}
