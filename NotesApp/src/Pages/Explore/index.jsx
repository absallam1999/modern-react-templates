import { useState, useEffect } from "react";
import Planet from "./../../Components/Planet";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Explore() {
  const [motion, setMotion] = useState(null);
  const [noteMotion, setNoteMotion] = useState(null);
  const [hidden, setHidden] = useState("none");

  useEffect(() => {
    setMotion("planet");
    setTimeout(() => {
      setMotion(null);
    }, 1000);
  }, []);

  const handleClick = () => {
    setNoteMotion("fadein 0.7s ease-in-out");
    setMotion("planet");
    setTimeout(() => {
      setNoteMotion(null);
      setMotion(null);
    }, 1000);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 1) {
      setHidden("block");
    } else {
      setHidden("none");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="explore-Page">
      <div className="container">
        <header>
          <h2>Expolre Notes</h2>
          <p>Let's Expolre How Other's Think.</p>
        </header>
        <div className="row">
          <div className="planet">
            <Planet motion={motion} />
          </div>
          <div className="explore-Content">
            <div className="search-Button">
              <form onSubmit={handleSubmit}>
                <i className="fa-light fa-search"></i>
                <input
                  type="text"
                  name="search"
                  placeholder="Search for User.."
                  onChange={handleChange}
                />
              </form>
            </div>
            <div className="search-Result" style={{ display: hidden }}>
              <Link to={`/profile`}>
                <img src={`./SVGs/avatar.svg`} alt="Profile Image" />
                <p>USER_FIRSTNAME</p>
              </Link>
            </div>
            <div style={{ animation: noteMotion }}>
              <div className="others-Notes">
                <div className="big-Note">
                  <div className="user-thumbnail">
                    <img src={`./SVGs/avatar.svg`} alt="Profile Image" />
                    <p>USER_FIRSTNAME</p>
                  </div>
                  <div className="user-note">
                    <i className="fa-solid fa-quote-right"></i>
                    <h2>New Note title</h2>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dicta quibusdam expedita nostrum explicabo
                    </p>
                    <i className="fa-solid fa-quote-left"></i>
                    <span>Created at: {format(new Date(), "yyyy-MM-dd")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleClick}>More</button>
      </div>
    </div>
  );
}
