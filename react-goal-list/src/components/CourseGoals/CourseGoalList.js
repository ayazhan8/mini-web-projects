import React from "react";
import CourseGoalItem from "./CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((item) => (
        <CourseGoalItem
          key={item.id}
          id={item.id}
          onDeleteItem={props.onDeleteGoal}
        >
          {item.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
