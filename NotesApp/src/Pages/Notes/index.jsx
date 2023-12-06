import { useState, useEffect } from "react";
import AddNote from "./../../Components/AddNote";
import Notifi from "./../../Components/Notifi";
import "./index.scss";

export default function Notes() {
  const [hidden, setHidden] = useState(true);
  const [showNotes, setShowNotes] = useState(false);
  const [notification, setNotification] = useState();
  const [text, setText] = useState("");
  const [arrow, setArrow] = useState("fa-light fa-arrow-right");

  const handleDelete = () => {
    setNotification(
      <Notifi
        className={"error"}
        header={"Error"}
        message={"Error Deleting Note!"}
      />
    );
  };

  useEffect(() => {
    if (showNotes === false) {
      setText("Notes");
      setArrow("fa-light fa-arrow-right");
    } else {
      setText("Back");
      setArrow("fa-light fa-arrow-left");
    }
  }, [showNotes]);

  return (
    <div className="notes-Page">
      <div className="container">
        <div className="row">
          {notification}
          <div
            className="box"
            style={{ display: showNotes === true ? "none" : "flex" }}
          >
            <i
              className="fa-light fa-plus"
              onClick={() => setHidden(!hidden)}
            ></i>
            <AddNote hidden={hidden} />
          </div>
          <div
            className="notes"
            style={{ display: showNotes === true ? "flex" : "none" }}
          >
            <div className="note-Box">
              <i className="fa-solid fa-quote-right"></i>
              <h2>New Note NO.#1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                adipisci quas!
              </p>
              <i className="fa-solid fa-quote-left"></i>
              <div className="edit-Note">
                <span>
                  <i
                    className="fa-light fa-trash"
                    onClick={() => handleDelete()}
                  ></i>
                </span>
              </div>
            </div>
            <div className="note-Box">
              <i className="fa-solid fa-quote-right"></i>
              <h2>New Note NO.#2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                adipisci quas!
              </p>
              <i className="fa-solid fa-quote-left"></i>
              <div className="edit-Note">
                <span>
                  <i
                    className="fa-light fa-trash"
                    onClick={() => handleDelete()}
                  ></i>
                </span>
              </div>
            </div>
            <div className="note-Box">
              <i className="fa-solid fa-quote-right"></i>
              <h2>New Note NO.#3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                adipisci quas!
              </p>
              <i className="fa-solid fa-quote-left"></i>
              <div className="edit-Note">
                <span>
                  <i
                    className="fa-light fa-trash"
                    onClick={() => handleDelete()}
                  ></i>
                </span>
              </div>
            </div>
            <div className="note-Box">
              <i className="fa-solid fa-quote-right"></i>
              <h2>New Note NO.#4</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                adipisci quas!
              </p>
              <i className="fa-solid fa-quote-left"></i>
              <div className="edit-Note">
                <span>
                  <i
                    className="fa-light fa-trash"
                    onClick={() => handleDelete()}
                  ></i>
                </span>
              </div>
            </div>
            <div className="note-Box">
              <i className="fa-solid fa-quote-right"></i>
              <h2>New Note NO.#5</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                adipisci quas!
              </p>
              <i className="fa-solid fa-quote-left"></i>
              <div className="edit-Note">
                <span>
                  <i
                    className="fa-light fa-trash"
                    onClick={() => handleDelete()}
                  ></i>
                </span>
              </div>
            </div>
            <div className="note-Box">
              <i className="fa-solid fa-quote-right"></i>
              <h2>New Note NO.#6</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                adipisci quas!
              </p>
              <i className="fa-solid fa-quote-left"></i>
              <div className="edit-Note">
                <span>
                  <i
                    className="fa-light fa-trash"
                    onClick={() => handleDelete()}
                  ></i>
                </span>
              </div>
            </div>
            <div className="note-Box">
              <i className="fa-solid fa-quote-right"></i>
              <h2>New Note NO.#7</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                adipisci quas!
              </p>
              <i className="fa-solid fa-quote-left"></i>
              <i className="fa-solid fa-lock"></i>
              <div className="edit-Note">
                <span>
                  <i
                    className="fa-light fa-trash"
                    onClick={() => handleDelete()}
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="arrow" onClick={() => setShowNotes(!showNotes)}>
          <i
            className={arrow}
            style={{
              display: arrow === "fa-light fa-arrow-right" ? "none" : "block",
            }}
          ></i>
          {text}
          <i
            className={arrow}
            style={{
              display: arrow === "fa-light fa-arrow-left" ? "none" : "block",
            }}
          ></i>
        </span>
      </div>
    </div>
  );
}
