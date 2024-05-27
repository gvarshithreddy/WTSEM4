const express = require("express");
const cors = require("cors");
const { Course, Student, Attendance } = require("./database");
const app = express();
app.use(cors());
const port = 5000;

app.get("/api/getCourses", (req, res) => {
  Course.find().then((courses) => {
    res.send(courses);
  });
});

app.get("/api/getStudents", (req, res) => {
  Student.find().then((students) => {
    res.send(students);
  });
});

app.post("/api/markAttendance", (req, res) => {
  const { date, course, presenties } = req.body;
  const attendance = new Attendance({
    date,
    course,
    presenties,
  });
  attendance.save().then(() => {
    res.send("Attendance marked successfully");
  });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
