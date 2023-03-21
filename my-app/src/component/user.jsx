import React from "react";
function User({name,email}){
    console.log(name,email,"userComponet");
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
}
export default User;