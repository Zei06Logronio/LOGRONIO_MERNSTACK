import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import Teachers from "./pages/teachers";
import AddTeacher from "./pages/AddTeacher";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/students" element={<Students />} />

        <Route
          path="/students/:id"
          element={<StudentDetails />}
        />
          <Route
          path="/teachers"
          element={<Teachers />}
        />

        <Route
          path="/add-teacher"
          element={<AddTeacher />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
