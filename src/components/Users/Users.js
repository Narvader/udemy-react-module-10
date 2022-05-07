import React from "react";
import Card from "../UI/Card";
import './Users.css';

const User = (props) => {

    const arrUsers = Object.values(props.items);

    return (
        <Card className="users">
            {arrUsers.map(user => {
                return (
                    <div className="user-container" key={user.id}>
                        <p>{user.name} ({user.age} years old)</p>
                    </div>
                )
            })}
        </Card>
    )
};

export default User;