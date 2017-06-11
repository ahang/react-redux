import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }

    render() {
        //only update state by using setState
        return (
            <div className="search-bar">
                <input
                //controlled component - has value set by state.
                //initial value is ""
                value = {this.state.term}
                onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;