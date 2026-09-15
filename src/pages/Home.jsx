import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";



function Home() {
  return (
    <div className="page">
      <h1>Welcome to the Student Management App</h1>

      <p>
        This application allows you to view a list of students
        and see their complete information.
      </p>
    </div>
  );
}

export default Home;
