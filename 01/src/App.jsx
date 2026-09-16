import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");

  function clickBtn(e) {
    e.preventDefault();
    console.log(time, details);



    setTime("")
    setDetails("")
  }

  

  return (
    <div className="start">
      <div className="left">
        <form onSubmit={(e) => clickBtn(e)} action="" className="form">
          <input
            onChange={(e) => setTime(e.target.value)}
            value={time}
            className="input"
            type="text"
            placeholder="Enter the task"
          />

          <textarea
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            className="input"
            name=""
            id=""
            placeholder="Descremation"
          ></textarea>

          <button  className="input">
            Submit
          </button>
        </form>
      </div>

      {/* note pad yha show hoga */}
      <div className="hello">
        <div className="notepad"> notepad</div>
        <div className="notepad"> notepad</div>
      </div>
    </div>
  );
};

export default App;
