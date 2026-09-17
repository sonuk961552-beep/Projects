import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  function clickBtn(e) {
    e.preventDefault();
    // console.log(time, details);

          // { kuch bhi add karne par 4 div faltu mai ban rha tha}
        if(!time.trim() || !details.trim()){
          return;
        }
           

    const copyTask = [...task];
    copyTask.push({time, details});
    setTask(copyTask);
    console.log(copyTask);

    setTime("");
    setDetails("");
  }

  // i am chnageing something here
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

          <button className="input">Submit</button>
        </form>
      </div>

      {/* note pad yha show hoga */}
     
      <div className="hello">
        
        {task.map(function (e, idx) {
          return (
            
            <div key={idx} className="notepad">
              <h2 className="h2">{e.time}</h2>
              <p className="p">{e.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
