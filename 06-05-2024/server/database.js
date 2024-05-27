const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/college", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const studentSchema = new mongoose.Schema({
  imageURL: String,
  name: String,
  rollno: Number,
});

const Student = mongoose.model("Student", studentSchema);

const courseSchema = new mongoose.Schema({
  name: String,
});

const Course = mongoose.model("Course", courseSchema);

const attendanceSchema = new mongoose.Schema({
  date: Date,
  course: String,
  presenties: [Number],
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

exports.Course = Course;
exports.Student = Student;
exports.Attendance = Attendance;
