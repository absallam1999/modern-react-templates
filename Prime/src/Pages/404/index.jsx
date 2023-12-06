import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

export default function NotFound() {
  const navigate = useNavigate();
  const path = useLocation().pathname.split("/");

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <div>
      <p>404 NotFound</p>
      <p>No Result for "{path}"</p>
    </div>
  );
}
