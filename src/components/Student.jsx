import { Link } from "react-router-dom";
import students from "../data/students.json";

function Student() {
  return (
    <div className="students-container">
      {students.map((student) => (
        <div className="student-card" key={student.id}>
          <h2>{student.name}</h2>

          <p>
            <strong>Student Number:</strong>{" "}
            {student.studentNumber}
          </p>

          <p>
            <strong>Course:</strong>{" "}
            {student.course}
          </p>

          <p>
            <strong>Year:</strong>{" "}
            {student.year}
          </p>

          <Link
            to={`/students/${student.id}`}
            className="details-button"
          >
            View Full Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Student;
