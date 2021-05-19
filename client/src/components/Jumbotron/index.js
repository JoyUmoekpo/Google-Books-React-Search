import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron text-center">
            <h1>Google Books Search</h1>
            <h4>Type the book title in the search Bar below!</h4>
            <h4>Titles will appear below which you can save!</h4>
            <h4>You can also view the books on Google Play too!</h4>
        </div>
    );
}

export default Jumbotron;