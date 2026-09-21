import { useState } from "react";
import { useRouter } from "next/router";

export default function AddTeacher() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    specialization: "",
    department: "",
    sex: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      const response = await fetch("/api/teachers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to add teacher.");
        return;
      }

      setMessage("Teacher added successfully!");

      setFormData({
        id: "",
        name: "",
        specialization: "",
        department: "",
        sex: "",
      });

      setTimeout(() => {
        router.push("/teachers");
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Add Teacher</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="id">Teacher ID</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="specialization">Specialization</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="sex">Sex</label>
          <select
            id="sex"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            required
          >
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>
          Add Teacher
        </button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  button: {
    padding: "12px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};