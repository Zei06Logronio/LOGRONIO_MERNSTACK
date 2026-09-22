import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <nav className="navbar">
        <h2>Student Management</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/teachers">Teachers</Link>
          <Link to="/add-teacher">Add Teacher</Link>
        </div>
      </nav>

      <div className="home-content">
        <h1>Welcome to the Student Management System</h1>

        <p>
          This application allows you to view students and their complete
          information.
        </p>
      </div>
    </div>
  );
}

export default Home;