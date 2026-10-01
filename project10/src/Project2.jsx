import { useState } from "react";
import "./Project2.css";

function Project2() {
  const [showSem2, setShowSem2] = useState(false);

  const sem1 = [
    ["24TA101", "Heritage of Tamils", 1, "A"],
    ["24BS151", "Physics and Chemistry Laboratory", 2, "A+"],
    ["24CH101", "Engineering Chemistry", 3, "A"],
    ["24PH101", "Engineering Physics", 3, "A"],
    ["24AC101", "Indian Constitution and Freedom Movement", 0, "A"],
    ["24EN101", "Technical English - I", 3, "A+"],
    ["24MA102", "Matrices and Differential Equations", 4, "A"],
    ["24CS192", "Design for Developers", 4, "A+"],
    ["24CS193", "Logic Building using Java", 4, "A+"]
  ];

  const sem2 = [
    ["24EN291", "Technical English - II", 3, "A+"],
    ["24TA201", "Tamils and Technology", 1, "A+"],
    ["24MA292", "Probability Distributions and Statistics", 4, "B+"],
    ["24EE293", "Basics of Electrical and Electronics for Computer Engineers", 3, "A"],
    ["24CS292", "Web Technology", 4, "A"],
    ["24CS293", "Problem Solving using Python for Computer Engineers", 4, "B+"],
    ["24CS294", "Object Oriented Programming using Java", 4, "B"]
  ];

  const gradePoints = {
    "A+": 9,
    A: 8,
    "B+": 7,
    B: 6
  };

  const calculateCGPA = (subjects) => {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach(([code, name, credits, grade]) => {
      totalCredits += credits;
      totalPoints += credits * gradePoints[grade];
    });

    return totalPoints / totalCredits;
  };

  const sem1CGPA = calculateCGPA(sem1);
  const sem2CGPA = calculateCGPA(sem2);

  const totalCredits = sem1.reduce((sum, item) => sum + item[2], 0) +
                        sem2.reduce((sum, item) => sum + item[2], 0);

  const currentCGPA =
    (sem1CGPA * 24 + sem2CGPA * 23) / totalCredits;

  const currentSubjects = showSem2 ? sem2 : sem1;

  return (
    <div className="report-page">

      <div className="report-card">

        <div className="report-header">
          <h1>STUDENT ACADEMIC REPORT CARD</h1>
          <p>Academic Performance Statement</p>
        </div>

        <div className="student-details">

          <div>
            <span>Student Name</span>
            <strong>S. Kiruthika</strong>
          </div>

          <div>
            <span>Register Number</span>
            <strong>411625104033</strong>
          </div>

          <div>
            <span>Academic Year</span>
            <strong>1</strong>
          </div>

          <div>
            <span>Programme</span>
            <strong>B.E. Computer Science and Engineering</strong>
          </div>

        </div>

        <div className="semester-buttons">
          <button
            className={!showSem2 ? "active" : ""}
            onClick={() => setShowSem2(false)}
          >
            Semester I
          </button>

          <button
            className={showSem2 ? "active" : ""}
            onClick={() => setShowSem2(true)}
          >
            Semester II
          </button>
        </div>

        <div className="semester-heading">
          <div>
            <h2>{showSem2 ? "Semester II" : "Semester I"}</h2>
            <p>
              Academic Duration:{" "}
              {showSem2
                ? "April / May 2026"
                : "November / December 2025"}
            </p>
          </div>

          <div className="cgpa-box">
            <span>Semester CGPA</span>
            <strong>
              {(showSem2 ? sem2CGPA : sem1CGPA).toFixed(2)}
            </strong>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Credits</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>
            {currentSubjects.map((subject, index) => (
              <tr key={subject[0]}>
                <td>{index + 1}</td>
                <td>{subject[0]}</td>
                <td>{subject[1]}</td>
                <td>{subject[2]}</td>
                <td className="grade">{subject[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="summary">

          <div className="summary-box">
            <span>Semester I CGPA</span>
            <strong>{sem1CGPA.toFixed(2)}</strong>
          </div>

          <div className="summary-box">
            <span>Semester II CGPA</span>
            <strong>{sem2CGPA.toFixed(2)}</strong>
          </div>

          <div className="summary-box final">
            <span>Current CGPA</span>
            <strong>{currentCGPA.toFixed(2)}</strong>
          </div>

        </div>

        <div className="report-footer">
          <p>
            This report card represents the academic performance for
            Academic Year 1.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Project2;