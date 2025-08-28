import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [txt, setTxt] = useState("");

  function handleKeyUp(event) {
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
        <textarea
          type="text"
          placeholder="Enter Your Name"
          onKeyUp={handleKeyUp}
        >
          {" "}
        </textarea>
      </div>
      <br></br>

      <p>{txt}</p>
    </div>
  );
};

export default App;
