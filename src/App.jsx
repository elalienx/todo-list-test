// NPM packages
import { useState } from "react";

// Project file
import getNames from "./script/getNames";

export default function App() {
  // Local state
  const [teachers, setTeachers] = useState([]);

  // Components
  const TeacherItems = teachers.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      {teachers.length > 0 && <ol>{TeacherItems}</ol>}
      <button onClick={() => setTeachers(getNames("Eduardo", 1))}>
        Show teachers
      </button>
    </div>
  );
}
