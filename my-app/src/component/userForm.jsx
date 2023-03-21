import React, { useState } from "react";
function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ name, email });
    setName("");
    setEmail("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="name">
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" />
      </label>
      <label for="email">
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
}
export default UserForm;
