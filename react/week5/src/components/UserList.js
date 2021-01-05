import React from "react";
import UserContext from "./UserContext";
import RenderUsers from "./RenderUsers";
import { Link } from "react-router-dom";

function Userlist() {
    const { isLoading, users,searchTerm,changeSearchTerm } = React.useContext(UserContext);
    return (
        <div className="home">
            <Link to="/about">About</Link>
            <h2>Github user search</h2>
            <input value={searchTerm} onChange={changeSearchTerm} placeholder="Search for user" />
            <ul>{isLoading ? <p>loading...</p> : users === undefined ? <p>No results</p> : <RenderUsers />}</ul>
        </div> 
    )
}

export default Userlist;