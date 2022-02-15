import React, { useState } from "react";
import "./CourseInput.css";
import Button from "./Button";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        ></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
