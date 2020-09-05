import React from "react";
import { Link, } from "react-router-dom";

function About() {
    return(
        <div className="About">
           <h1>Welcome to the Github Search Page</h1> 
           <p>This app fetches an api from the Github and renders the users list based on the 'user' you try to search. You can click on username and get more information about their profile.</p>
            <Link to="/">Go to home page</Link>
        </div>
    )
}

export default About;