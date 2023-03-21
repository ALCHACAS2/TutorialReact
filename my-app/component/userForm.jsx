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
    <form onSubmit={handleSbmit}>
    <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>
    <button type="submit">Add User</button>
    </form>
);
}
export default UserForm;
