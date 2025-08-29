import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [txt, setTxt] = useState("");

  function handleChange(event) {
    if (event.target.value) {
      setTxt(`Hello, ${event.target.value}!`);
    } else {
      setTxt("");
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
          value={txt}
          placeholder="Enter Your Name"
          onChange={handleChange}
        >
          {" "}
        </input>
      </div>
      <br></br>

      <p>{txt}</p>
    </div>
  );
};

export default App;
