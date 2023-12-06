import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddImage from "./../../Components/AddImage";
import "./index.scss";

export default function Profile() {
  const [className, setClassName] = useState("hidden");

  useEffect(() => {
    setTimeout(() => {
      setClassName("add-Image");
    }, 2000);
  }, []);

  return (
    <div className="profile-Page">
      <div className="container">
        <div className="row">
          <div className="profile-Image">
            <img src="././SVGs/avatar.svg" />
          </div>
          <div className="profile-Content">
            <header>
              <h2>USER_FIRSTNAME</h2>
              <p>USER_USERNAME</p>
            </header>
            <div className="about-Content">
              <p>
                <span>Short_Brief_About_Yourself:</span>&nbsp;
                <span contentEditable>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  odio dolorem totam minima laboriosam, ipsam nihil provident.
                  Voluptate distinctio sed, quam sunt aspernatur unde
                  dignissimos itaque commodi dolore, minima deleniti.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="notes-Archive">
          <div className="row">
            <div className="note-Box">
              <i className="fa-solid fa-quote-right"></i>
              <h2>New Note NO.#1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                consectetur eaque
              </p>
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <div className="note-Box">
              <i className="fa-solid fa-quote-right"></i>
              <h2>New Note NO.#2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                consectetur eaque
              </p>
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <div className="note-Box">
              <i className="fa-solid fa-quote-right"></i>
              <h2>New Note NO.#3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                consectetur eaque
              </p>
              <i className="fa-solid fa-quote-left"></i>
            </div>
          </div>
          <Link to="/notes">All Notes</Link>
        </div>
        <AddImage className={className} />
      </div>
    </div>
  );
}
