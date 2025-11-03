import { use } from "react";

// import React, { use } from 'react';
const Users = ({ userPromise }) => {
    // const users = use(userPromise);
    console.log(userPromise);
    const users = use(userPromise);
    console.log(users);
    return (
        <div>
            {
                users.map((user) => <p key={user.id}>{user.name}</p>)
            }
        </div>
    );
};

export default Users;