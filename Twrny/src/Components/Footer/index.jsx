import { Link } from "react-router-dom";
import "./index.scss";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <div className="news-letter">
          <h3> اشترك في نشرتنا البريدية</h3>
          <form>
            <input name="news-letter" placeholder="بريدك الالكترونى .." />
            <button type="submit">
              <span>&gt;</span>
            </button>
          </form>
        </div>
        <div className="navigation">
          <Link to="/">
            <p>الرئيسية</p>
          </Link>
          <Link to="/about">
            <p>من نحن</p>
          </Link>
          <Link to="/terms">
            <p>الشروط والاستخدام</p>
          </Link>
          <Link to="/policy">
            <p>سياسة الموقع</p>
          </Link>
          <Link to="/contact">
            <p>تواصل معنا</p>
          </Link>
        </div>
        <div className="logo">
          <Link to="/">
            <h2>
              <span>طو</span>رنى
            </h2>
          </Link>
        </div>
        <div className="copyrights">
          <p>
            جميع الحقوق محفوظة &copy; <span>{date}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
