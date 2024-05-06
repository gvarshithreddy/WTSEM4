import React from "react";
import "./static/Card.css";
const Card = (props) => {
  const onClickPresent = () => {
    document.getElementById(props.student.rollno).classList.add("present");
    let presenties = props.presenties;
    props.setPresenties([...presenties, props.student.rollno]);
    console.log(props.presenties);
  };

  const onClickAbsent = () => {
    document.getElementById(props.student.rollno).classList.add("absent");
  };
  return (
    <div className="card" id={props.student.rollno}>
      <img src={props.student.imageURL} alt="random" />
      <div>
        <h2>{props.student.rollno}</h2>
        <h3>{props.student.name}</h3>
      </div>
      <div className="footer">
        <button onClick={onClickPresent}>Present</button>
        <button onClick={onClickAbsent}>Absent</button>
      </div>
    </div>
  );
};

export default Card;
