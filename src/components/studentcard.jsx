function Studentcard({ name, age, studentId, course, section }) {
  return (
    <div className="student-card">
      <p className="text-xl font-bold">{name}</p>
      <p className="text-lg">Age: {age}</p>
      <p className="text-md">Student ID: {studentId}</p>
      <p className="text-md">Course: {course}</p>
      <p className="text-md">Section: {section}</p>
    </div>
  );
}

export default Studentcard;
