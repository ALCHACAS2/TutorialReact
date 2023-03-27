// import React, { useState } from "react";
// import UserList from "./component/userList";
// import UserForm from "./component/userForm";
// import HeroSection from "./component/HeroSection";
// function App() {
//   const [user, setUser] = useState([]);
//   const addUser = (newUser) => {
//     console.log(newUser);
//     setUser([...user, newUser]);
//   };

//   return (
//     <div class=" box-border bg-gray-700 to-#F6F1F1 rounded shadow h-0 flex flex-col justify-center">
//       <UserForm onSubmit={addUser} />
//       <UserList users={user} />
//       <HeroSection/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import UserList from "./component/userList";
import UserForm from "./component/userForm";
import HeroSection from "./component/HeroSection";

function App() {
  const [user, setUser] = useState([]);
  const [selectedButton, setSelectedButton] = useState("users");

  const addUser = (newUser) => {
    console.log(newUser);
    setUser([...user, newUser]);
  };

  return (
    <div className="box-border bg-gray-700 to-#F6F1F1 rounded shadow h-0 flex flex-col justify-center">
      <div className="flex justify-center space-x-4">
        <button className={`py-2 px-4 ${selectedButton === "users" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}`} onClick={() => setSelectedButton("users")}>
          Users
        </button>
        <button className={`py-2 px-4 ${selectedButton === "hero" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}`} onClick={() => setSelectedButton("hero")}>
          Hero
        </button>
      </div>
      {selectedButton === "users" ? (
        <div>
          <UserForm onSubmit={addUser} />
          <UserList users={user} />
        </div>
      ) : (
        <div>
          <HeroSection />
        </div>
      )}
    </div>
  );
}

export default App;
