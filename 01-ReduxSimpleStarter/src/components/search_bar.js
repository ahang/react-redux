import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }

    render() {
        //only update state by using setState
        return (
            <div>
                <input
                //controlled component - has value set by state.
                //initial value is ""
                value = {this.state.term}
                onChange = {event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;