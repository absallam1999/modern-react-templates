import { Link } from "react-router-dom";
import register from "./../../assets/icons/register.svg";
import "./index.scss";

export default function Register() {
    document.title = 'طورنى - تسجيل حساب جديد'
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="register-img">
            <img src={register} alt="Register" />
          </div>
          <div className="register-form">
            <h2>تسجيل حساب جديد</h2>
            <form>
              <input type="name" name="first-name" placeholder="الاسم الأول" />
              <input type="name" name="last-name" placeholder="الاسم الأخير" />
              <input
                type="email"
                name="email"
                placeholder="البريد الالكترونى"
              />
              <input type="password" name="password" placeholder="كلمة السر" />
              <button type="submit">تسجيل</button>
              <div className="links">
                <Link to="/login">او يمكنك تسجيل الدخول</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
