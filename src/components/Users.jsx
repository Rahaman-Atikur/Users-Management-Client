import { use } from "react";

// import React, { use } from 'react';
const Users = ({ userPromise }) => {
    // const users = use(userPromise);
    console.log(userPromise);
    const users = use(userPromise);

    console.log(users);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} action="">
                    <input name="name" type="text" />
                    <br />
                    <input name="email" type="text" />
                    <br />
                    <button>Add User</button>
                </form>
            </div>
            {
                users.map((user) => <p key={user.id}>{user.name} : {user.email}</p>)
            }
        </div>
    );
};
export default Users;