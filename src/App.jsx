import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import AddTeacher from "./pages/AddTeacher";
import StudentDetails from "./pages/StudentDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/students" element={<Students />} />

        <Route
          path="/students/:id"
          element={<StudentDetails />}
        />

        <Route path="/teachers" element={<Teachers />} />

        <Route
          path="/add-teacher"
          element={<AddTeacher />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;