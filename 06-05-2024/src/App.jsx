import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [studentList, setStudentList] = useState([]);

  const [date, setDate] = useState(new Date());
  const [courses, setCourses] = useState([]);
  const [presenties, setPresenties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/getCourses")
      .then((res) => res.json())
      .then((data) => setCourses(data.map((course) => course.name)));

    fetch("http://localhost:5000/api/getStudents")
      .then((res) => res.json())
      .then((data) => setStudentList(data));
  }, []);

  const postAttendance = async () => {
    await fetch("http://localhost:5000/api/markAttendance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date,
        course: document.getElementById("course").value,
        presenties,
      }),
    })
      .then((res) => res.text())
      .then((data) => console.log(data));
  };

  return (
    <>
      <NavBar />
      <h1>Attendance Form</h1>
      <div className="heading">
        <label htmlFor="date">Marking Attendance for </label>
        <input
          type="date"
          value={date.toISOString().split("T")[0]}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      </div>

      <div className="heading">
        <label htmlFor="course">For the Course</label>
        <select name="course" id="course">
          {courses.map((course, index) => (
            <option key={index}>{course}</option>
          ))}
        </select>
      </div>

      <div className="students">
        {studentList
          .sort((item1, item2) => item1.rollno - item2.rollno)
          .map((student, index) => (
            <Card
              key={index}
              student={student}
              presenties={presenties}
              setPresenties={setPresenties}
            />
          ))}
      </div>
      <button className="mark" onClick={postAttendance}>
        Mark Attendance
      </button>
    </>
  );
}

export default App;
