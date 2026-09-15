import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Management System</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
      </div>
    </nav>
  );
}

export default Navbar;
