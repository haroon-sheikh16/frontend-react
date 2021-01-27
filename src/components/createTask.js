import React from "react";
import { Redirect } from "react-router-dom";

let handleSubmit = (event) => {
  if (event.target.task.value !== "") {
    event.preventDefault();
    let value1 = localStorage.getItem("task");
    if (value1) {
      let value2 = JSON.parse(value1);
      value2.push({ id: value2.length + 1, name: event.target.task.value });
      localStorage.setItem("task", JSON.stringify(value2));
    } else {
      let value2 = [];
      value2.push({ id: value2.length + 1, name: event.target.task.value });
      localStorage.setItem("task", JSON.stringify(value2));
    }
    document.getElementById("t").value = "";
  }
};

function CreateTask() {
  return (
    <div>
      <div>
        <h3 className="text-center my-4 ">Create Task</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h4>
            <label>Enter Your Task</label>
          </h4>
          <input
            id="t"
            name="task"
            className="form-control"
            type="text"
            placeholder="Enter Task"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Done
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
