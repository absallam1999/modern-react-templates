import { useState } from "react";
import "./index.scss";

export default function AddImage(props) {
  const [style, setStyle] = useState("block");

  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <div className={props.className}>
      <div style={{ display: style }}>
        <i className="fa-solid fa-x" onClick={() => setStyle("none")}></i>
        <form onSubmit={handleSubmit}>
          <h3>Add Profile Image</h3>
          <input
            type="file"
            name="Add Image"
            placeholder="Add Image"
            onChange={() => setImage(e.target.files[0])}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
