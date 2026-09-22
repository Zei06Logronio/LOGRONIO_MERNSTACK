import { useState } from "react";
function AddTeacher() {
  const [teacher, setTeacher] = useState({
    id: "",
    name: "",
    specialization: "",
    department: "",
    sex: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTeacher({
      ...teacher,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing teachers from localStorage
    const existingTeachers =
      JSON.parse(localStorage.getItem("teachers")) || [];

    // Check if ID already exists
    const existingTeacher = existingTeachers.find(
      (item) => item.id === teacher.id
    );

    if (existingTeacher) {
      alert("Teacher ID already exists!");
      return;
    }

    // Add the new teacher
    const updatedTeachers = [
      ...existingTeachers,
      teacher,
    ];

    // Store updated teachers
    localStorage.setItem(
      "teachers",
      JSON.stringify(updatedTeachers)
    );

    alert("Teacher added successfully!");

    // Clear form
    setTeacher({
      id: "",
      name: "",
      specialization: "",
      department: "",
      sex: "",
    });
  };

  return (
    <div>
      <h1>Add Teacher</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Teacher ID</label>
          <input
            type="text"
            name="id"
            value={teacher.id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={teacher.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Specialization</label>
          <input
            type="text"
            name="specialization"
            value={teacher.specialization}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={teacher.department}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Sex</label>

          <select
            name="sex"
            value={teacher.sex}
            onChange={handleChange}
            required
          >
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <button type="submit">
          Add Teacher
        </button>
      </form>
    </div>
  );
}

export default AddTeacher;