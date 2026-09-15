import { Link, useParams } from "react-router-dom";
import students from "./data/students.json";

function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === parseInt(id)
  );

  if (!student) {
    return (
      <div className="page">
        <h1>Student Not Found</h1>

        <Link to="/students">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="student-details">
        <h1>{student.name}</h1>

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

        <p>
          <strong>Email:</strong>{" "}
          {student.email}
        </p>

        <p>
          <strong>Age:</strong>{" "}
          {student.age}
        </p>

        <Link to="/students" className="back-button">
          ← Back to Students
        </Link>
      </div>
    </div>
  );
}

export default StudentDetails;

