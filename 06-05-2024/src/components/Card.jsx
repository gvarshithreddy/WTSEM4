import React from "react";

import "./static/Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <img src="https://picsum.photos/300/300" alt="random" />
      <div>
        <h2>{props.student.rollno}</h2>
        <h3>{props.student.name}</h3>
      </div>
      <div className="footer">
        <button>Present</button>
        <button>Absent</button>
      </div>
    </div>
  );
};

export default Card;
