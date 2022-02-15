import "./App.css";
import AddUser from "./components/Users/AddUser";
import { useState } from "react";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const users = [
    { username: "Ali", age: "21", id: "u1" },
    { username: "Sam", age: "27", id: "u2" },
  ];
  const [enteredUsers, setUsers] = useState(users);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...enteredUsers];
      updatedUsers.unshift({
        username: newUser.username,
        age: newUser.age,
        id: newUser.id,
      });
      console.log(updatedUsers);
      return updatedUsers;
    });
  };
  let content = <p style={{ textAlign: "center" }}>No users found.</p>;

  if (users.length > 0) {
    content = <UsersList allUsers={enteredUsers} />;
  }

  return (
    <>
      <AddUser onFormSubmit={addUserHandler} />
      {content}
    </>
  );
};

export default App;
