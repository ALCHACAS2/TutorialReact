import React, { useState } from "react";
import UserList from "./component/userList";
import UserForm from "./component/userForm";
function App() {
  const [user, setUser] = useState([]);
  const addUser = (newUser) => {
    console.log(newUser);
    setUser([...user, newUser]);
  };

  return (
    <div class=" box-border bg-gray-700 to-#F6F1F1 rounded shadow h-0 flex flex-col justify-center">
      <UserForm onSubmit={addUser} />
      <UserList users={user} />
    </div>
  );
}

export default App;
