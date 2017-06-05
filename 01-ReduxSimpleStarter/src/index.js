import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = "AIzaSyCQvWBLh5ax7ivsDhR9XbH1FUEW0uUfi-g";

// Create new Component. Should produce HTML
// ES6 - const - similar to var; unchangeable variable.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
            this.setState({ videos });
            //this.setState({videos:videos}) -> only when key and prop = same name
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take component and Render it in the DOM
ReactDOM.render(
    <App />,
    document.querySelector(".container")
);