import students from "../data/student.json";
import Student from "../components/Student";


function Students() {
  return (
    <div>
      {students.map((student) => (
        <Student key={student.id} student= {student} />
      ))}
    </div>
  );
}

export default Students;
