import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { useState, useContext, createContext } from "react";

const PresentiesContext = createContext();
function App() {
  const [studentList, setStudentList] = useState([
    {
      imageURL: "https://picsum.photos/300/300",
      name: "Varshith",
      rollno: 160122733176,
    },
    {
      imageURL: "https://picsum.photos/300/300",
      name: "Venu",
      rollno: 160122733192,
    },
    {
      imageURL: "https://picsum.photos/300/300",
      name: "Abhilash",
      rollno: 160122733182,
    },
    {
      imageURL: "https://picsum.photos/300/300",
      name: "Bhargav",
      rollno: 160122733185,
    },
    {
      imageURL: "https://picsum.photos/300/300",
      name: "Nagendra",
      rollno: 160122733195,
    },
    {
      imageURL: "https://picsum.photos/300/300",
      name: "Pranav",
      rollno: 160122733175,
    },
    {
      imageURL: "https://picsum.photos/300/300",
      name: "Vijay",
      rollno: 160122733177,
    },
    {
      imageURL: "https://picsum.photos/300/300",
      name: "Bharath",
      rollno: 160122733180,
    },
    {
      imageURL: "https://picsum.photos/300/300",
      name: "Vasanth",
      rollno: 160122733183,
    },
    {
      imageURL: "https://picsum.photos/300/300",
      name: "Swapnith",
      rollno: 160122733186,
    },
  ]);
  const [date, setDate] = useState(new Date());
  const [courses, setCourses] = useState([
    "Web Technologies",
    "Web technologies Lab",
    "DataBase managemet Systems",
    "Database Systems Lab",
    "Probabiility and Statistics",
  ]);

  const [presenties, setPresenties] = useState([]);

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
    </>
  );
}

export default App;
