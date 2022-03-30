// NPM packages
import { useState } from "react";

// Project file
import getNames from "./script/getNames";

export default function App() {
  // Properties
  const [teachers, setTeachers] = useState(getNames());

  // Components
  const TeacherItems = teachers.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <ol>{TeacherItems}</ol>
    </div>
  );
}
