import { useState } from "react";
import { Link } from "react-router-dom";
import Notifi from "./../../Components/Notifi";
import "./index.scss";

export default function Register() {
  const [user, setUser] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [notification, setNotification] = useState();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value.toLowerCase() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification(
      <Notifi
        className={"error"}
        header={"Error Register"}
        message={"Email or Username Already Exist!"}
      />
    );
  };

  return (
    <div className="register-Page">
      <div className="container">
        {notification}
        <div className="row">
          <h2>
            Register to <Link to="/">Notes</Link>
          </h2>
          <span>Explore How Other's Think.</span>
          <div className="register-Background">
            <img src="././SVGs/register.svg" alt="Register" />
          </div>
          <hr />
          <div className="register-Form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder="Username"
                value={user.user_name}
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={user.first_name}
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={user.last_name}
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                required
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                required
                onChange={handleChange}
              />
              <button type="Submit">Register</button>
            </form>
            <p>
              Already Have Account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
