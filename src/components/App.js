import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  let [name, setName] = useState("");

  function handleChange(event) {
    if (event.target.value) {
      setName(`${event.target.value}`);
    } else {
      setName("");
    }
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <br></br>
      <p>Enter Your Name: </p>
      <br></br>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Enter Your Name"
          onChange={handleChange}
        />
      </div>
      <br></br>

      <p>{name !== "" && `Hello, ${name}!`}</p>
    </div>
  );
}

export default App;
