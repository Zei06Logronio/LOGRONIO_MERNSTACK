import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Studentcard from "./components/studentcard.jsx";
import Student from "./components/student.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex flex-row gap-2 p-2">
        <Link to="/studentcardh">Home</Link>
        <Link to="/studentcard">Student Card</Link>
        <Link to="/student">Student</Link>
      </nav>
      <Routes>
        <Route path="/studentcard" element={<Studentcard />}>
        </Route>
        <Route path="/student" element={<Student />}>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;