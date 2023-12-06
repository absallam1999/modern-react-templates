import { useState } from "react";
import { Link } from "react-router-dom";
import Notifi from "./../../Components/Notifi";
import "./index.scss";

export default function () {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [notification, setNotification] = useState();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value.toLowerCase() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification(
      <Notifi
        className={"error"}
        header={"Error Login"}
        message={"Email or Password is inCorrect!"}
      />
    );
  };

  return (
    <div className="login-Page">
      <div className="container">
        {notification}
        <div className="row">
          <h2>
            Login to <Link to="/">Notes</Link>
          </h2>
          <span>Explore How Other's Think.</span>
          <div className="login-Background">
            <img src="././SVGs/login.svg" alt="Login" />
          </div>
          <hr />
          <div className="login-Form">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={inputs.email}
                required
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={inputs.password}
                required
                onChange={handleChange}
              />
              <button type="Submit">Login</button>
            </form>
            <p>
              Not Have Account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
