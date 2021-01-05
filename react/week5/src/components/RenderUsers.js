import React from "react";
import UserContext from "./UserContext";
import { Link, } from "react-router-dom";


function RenderUsers() {
    const { users } = React.useContext(UserContext);
    return (
        <div className="user">       
            {users.map(user => 
                <li key={user.id}>
                    <img src={user.avatar_url} alt="userpic" />
                    <Link to={`/${user.login}`}>{user.login}</Link>
                </li>           
            )}
        </div>
    )
}

export default RenderUsers;
