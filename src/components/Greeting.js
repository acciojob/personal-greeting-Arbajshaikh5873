import React, { useState } from "react";

function Greeting() {
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
      <br></br>
      <p>Enter Your Name: </p>

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

export default Greeting;
