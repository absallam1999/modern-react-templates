import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Settings() {
  const [user, setUser] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value.toLowerCase() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="settings-Page">
      <div className="container">
        <header>
          <h2>Update Your Data</h2>
        </header>
        <div className="row">
          <div className="settings-Bg">
            <img src="././SVGs/settings.svg" alt="Settings" />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              value={user.user_name}
              placeholder="Username"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              placeholder="First Name"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="last_name"
              value={user.last_name}
              placeholder="Last Name"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <div className="btns">
              <button type="submit">UPDATE</button>
              <button style={{ backgroundColor: "#f00" }}>DELETE</button>
              <Link style={{ backgroundColor: "#333" }}>Logout</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
