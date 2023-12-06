import { Link } from "react-router-dom";
import login from "./../../assets/icons/login.svg";
import "./index.scss";

export default function Login() {
  document.title = 'طورنى - تسجيل دخول'
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="login-img">
            <img src={login} alt="Login" />
          </div>
          <div className="login-form">
            <h2>تسجيل دخول</h2>
            <form>
              <label className="first">
                <i className="fa-light fa-envelope"></i>
              </label>
              <input
                type="email"
                name="email"
                placeholder="البريد الالكترونى"
              />
              <label className="last">
                <i className="fa-light fa-lock"></i>
              </label>
              <input type="password" name="password" placeholder="كلمة السر" />
              <button type="submit">دخول</button>
              <div className="links">
                <Link to="/">نسيت كلمة السر؟</Link>
                <Link to="/register">تسجيل حساب جديد</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
