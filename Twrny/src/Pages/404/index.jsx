import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import "./index.scss";

export default function ErrorPage() {
  document.title = 'طورنى - خطأ'
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div className="Error">
      <div className="container">
        <h2>404 خـطـأ.</h2>
        <p>لايوجد نتائج عن "{location.pathname.split("/")}"</p>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}
