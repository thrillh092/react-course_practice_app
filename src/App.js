import UsersList from "./components/UI/UsersList";
import AddUser from "./components/Users/AddUsers";
import { useState } from "react";

function App() {
  const [userList, setUsers] = useState([]);

  const addUserHandler = (username, userAge) => {
    setUsers((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
