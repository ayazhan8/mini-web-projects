import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.allUsers.map((item) => (
          <li key={item.id}>
            {item.username} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
