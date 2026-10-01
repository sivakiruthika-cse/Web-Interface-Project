import React from "react";
import "./Project1.css";
import student from "./assets/girl.png";

function Header() {
  return (
    <header className="header">
      <h1>Prince College of Engineering</h1>
    </header>
  );
}

function StudentCard(props) {
  return (
    <div className="student-card">
      <img src={props.picture} alt="Student" className="student-img" />

      <h2 style={{ color: "#FACC15" }}>{props.name}</h2>

      <p><b>Register No:</b> {props.regno}</p>
      <p><b>Department:</b> {props.dept}</p>
      <p><b>Year:</b> {props.year}</p>
      <p><b>Semester:</b> {props.sem}</p>

      <p style={{ color: "#22C55E", fontWeight: "bold" }}>
        CGPA: {props.cgpa}
      </p>

      <p style={{ color: "#38BDF8", fontWeight: "bold" }}>
        Attendance: {props.attendance}%
      </p>

      <p>
        <b>Semester Exam:</b>{" "}
        {props.attendance >= 80
          ? "Eligible for Semester Examination"
          : "Not Eligible"}
      </p>

      <p>
        <b>Placement:</b>{" "}
        {props.cgpa >= 8.0
          ? "Eligible"
          : "Needs to Improve"}
      </p>
    </div>
  );
}

function SubjectList(props) {
  const subjects = [
    "Software Engineering",
    "Data Structures",
    "DBMS",
    "Data Science",
    "Web Interface",
  ];

  return (
    <div className="subjects">
      <h2>Semester Details</h2><br></br>

      <div className="details">
        <p><b>Current Semester:</b> {props.sem}</p><br></br>
        <p><b>Current Year:</b> {props.year}</p><br></br>
        <p><b>Total Subjects:</b> {subjects.length}</p><br></br>
      </div>

      <div className="subject-container">
        {subjects.map((subject, index) => (
          <div className="subject-box" key={index}>
            {subject}
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>@ 2026 Prince College of Engineering</p>
    </footer>
  );
}

function Project1() {
  return (
    <>
      <Header />

      <StudentCard
        name="S.Kiruthika"
        regno="411625104033"
        dept="CSE"
        year="2"
        sem="3"
        cgpa={8.5}
        attendance={85}
        picture={student}
      />

      <SubjectList
        sem="3"
        year="2"
      />

      <Footer />
    </>
  );
}

export default Project1;