import React, { useState } from "react";
import "./Project2.css";

function Project2() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aadhya", present: false },
    { id: 2, name: "Bavya", present: false },
    { id: 3, name: "Charan", present: false },
    { id: 4, name: "Dhiya", present: false },
    { id: 5, name: "Elan", present: false },
    { id: 6, name: "Fazil", present: false },
    { id: 7, name: "Ganesh", present: false },
    { id: 8, name: "Harsha", present: false },
    { id: 9, name: "Irfan", present: false },
    { id: 10, name: "Joe", present: false },
    { id: 11, name: "Kiran", present: false },
    { id: 12, name: "Lidiya", present: false },
    { id: 13, name: "Mano", present: false },
    { id: 14, name: "Nisha", present: false },
    { id: 15, name: "Oliver", present: false },
    { id: 16, name: "Priya", present: false },
    { id: 17, name: "Qadir", present: false },
    { id: 18, name: "Revi", present: false },
    { id: 19, name: "Shriya", present: false },
    { id: 20, name: "Teja", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const presentCount = students.filter(
    (student) => student.present
  ).length;

  const absentCount = students.length - presentCount;

  return (
    <div className="attendance-container">
      <h1>Attendance Tracker</h1>

      <div className="summary">
        <div className="count-card">
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>

        <div className="count-card present-card">
          <h3>Present</h3>
          <p>{presentCount}</p>
        </div>

        <div className="count-card absent-card">
          <h3>Absent</h3>
          <p>{absentCount}</p>
        </div>
      </div>

      <div className="student-list">
        {students.map((student) => (
          <div className="student" key={student.id}>
            <span>{student.name}</span>

            <button
              className={student.present ? "present" : "absent"}
              onClick={() => toggleAttendance(student.id)}
            >
              {student.present ? "Present" : "Absent"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project2;