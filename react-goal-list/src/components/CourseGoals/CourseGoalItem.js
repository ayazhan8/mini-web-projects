import React from "react";

const CourseGoalItem = (props) => {
  const clickItemHandler = () => {
    props.onDeleteItem(props.id);
  };

  return <li onClick={clickItemHandler}>{props.children}</li>;
};

export default CourseGoalItem;
