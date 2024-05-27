import React from "react";
import "./static/Card.css";
const Card = (props) => {
  const onClickPresent = () => {
    document.getElementById(props.student.rollno).classList.add("present");
    document.getElementById(props.student.rollno).classList.remove("absent");
    let presenties = props.presenties;
    if (!presenties.includes(props.student.rollno)) {
      presenties.push(props.student.rollno);
      props.setPresenties([...presenties]);
    }
    console.log(props.presenties);
  };

  const onClickAbsent = () => {
    document.getElementById(props.student.rollno).classList.add("absent");
    document.getElementById(props.student.rollno).classList.remove("present");
    if (props.presenties.includes(props.student.rollno)) {
      let presenties = props.presenties;
      presenties.splice(presenties.indexOf(props.student.rollno), 1);
      props.setPresenties([...presenties]);
      console.log(props.presenties);
    }
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
