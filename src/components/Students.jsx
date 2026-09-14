import students from "./data/students.json";
import Student from "./components/Student";

function Students() {
  return (
    <div className="page">
      <h1>Students</h1>

      <div className="students-container">
        {students.map((student) => (
          <Student
            key={student.id}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}

export default Students;
