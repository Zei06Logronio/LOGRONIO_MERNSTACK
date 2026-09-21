import { useEffect, useState } from "react";
import Link from "next/link";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("/api/teachers");

        if (!response.ok) {
          throw new Error("Failed to fetch teachers.");
        }

        const data = await response.json();

        setTeachers(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load teachers.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Teachers List</h1>

        <Link href="/add-teacher">
          <button style={styles.addButton}>
            Add Teacher
          </button>
        </Link>
      </div>

      {loading && <p>Loading teachers...</p>}

      {error && <p style={styles.error}>{error}</p>}

      {!loading && !error && teachers.length === 0 && (
        <p>No teachers have been added yet.</p>
      )}

      {!loading && !error && teachers.length > 0 && (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Specialization</th>
              <th style={styles.th}>Department</th>
              <th style={styles.th}>Sex</th>
            </tr>
          </thead>

          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td style={styles.td}>{teacher.id}</td>
                <td style={styles.td}>{teacher.name}</td>
                <td style={styles.td}>
                  {teacher.specialization}
                </td>
                <td style={styles.td}>
                  {teacher.department}
                </td>
                <td style={styles.td}>{teacher.sex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "50px auto",
    padding: "20px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  addButton: {
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    border: "1px solid #ddd",
    padding: "12px",
    backgroundColor: "#f4f4f4",
    textAlign: "left",
  },

  td: {
    border: "1px solid #ddd",
    padding: "12px",
  },

  error: {
    color: "red",
  },
};