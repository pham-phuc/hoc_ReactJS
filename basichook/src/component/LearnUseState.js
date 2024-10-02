import React from "react";
import { useState } from "react";
function LearnUseState() {
  const storageJobs = JSON.parse(localStorage.getItem("jobs"));
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(storageJobs ?? []);

  const handleClick = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  return (
    <div className="m-10">
    <h1 className="py-3">UseState</h1>
      <input
        className="border p-2"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button className="border p-2" onClick={handleClick}>
        Add !
      </button>
      {jobs.map((job, index) => (
        <li className=" m-2" key={index}>
          {job}
        </li>
      ))}
    </div>
  );
}

export default LearnUseState;
