import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBDDVZdTSE6chVD2WIjE78sj60ouGz";

// Create new Component. Should produce HTML
// ES6 - const - similar to var; unchangeable variable.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take component and Render it in the DOM
ReactDOM.render(
    <App />,
    document.querySelector(".container")
);