import React, { useState } from "react";
import UserList from "./component/userList";
import UserForm from "./component/userForm";
function App() {
  const [user, setUser] = useState([]);
  const addUser = (user) => {
    setUser([...users, user]);
  };

  return (
    <div>
      <UserForm onSubmit={addUser} />
      <UserList users={user} />
    </div>
  );
}

export default App;
