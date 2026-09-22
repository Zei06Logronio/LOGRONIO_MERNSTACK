import { useState } from "react";
import teacherData from "../data/teacher.json";

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const savedTeachers =
      JSON.parse(localStorage.getItem("teachers")) || [];

    setTeachers([
      ...teacherData,
      ...savedTeachers,
    ]);
  }, []);

  return (
    <div>
      <h1>Teachers List</h1>

      {teachers.length === 0 ? (
        <p>No teachers available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Employee Number</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>Department</th>
              <th>Sex</th>
            </tr>
          </thead>

          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.name}</td>
                <td>{teacher.specialization}</td>
                <td>{teacher.department}</td>
                <td>{teacher.sex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Teachers;