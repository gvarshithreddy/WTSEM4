import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [studentList, setStudentList] = useState([
    { name: "Varshith", rollno: 160122733176 },
    { name: "Venu", rollno: 160122733192 },
    { name: "Abhilash", rollno: 160122733182 },
    { name: "Bhargav", rollno: 160122733185 },
    { name: "Bhargav", rollno: 160122733185 },
    { name: "Bhargav", rollno: 160122733185 },
    { name: "Bhargav", rollno: 160122733185 },
    { name: "Bhargav", rollno: 160122733185 },
    { name: "Bhargav", rollno: 160122733185 },
    { name: "Bhargav", rollno: 160122733185 },
  ]);
  const [date, setDate] = useState(new Date());
  return (
    <>
      <NavBar />
      <h1>Admission Form</h1>
      <div className="heading">
        <label htmlFor="date">Marking Attendance for </label>
        <input
          type="date"
          value={date.toISOString().split("T")[0]}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      </div>

      <div className="students">
        {studentList
          .sort((item1, item2) => item1.rollno - item2.rollno)
          .map((student, index) => (
            <Card key={index} student={student} />
          ))}
      </div>
    </>
  );
}

export default App;
