import Studentcard from "./components/studentcard";

function App() {
  return (
    <div className="App">
      <Studentcard
        name="Zea Logronio"
        age={20}
        studentId="202403854"
        course="Information Technology"
        section="3-3"
      />
    </div>
  );
}

export default App;