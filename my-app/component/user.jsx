import React from "react";
function User({name,email}){
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
}
export default User;