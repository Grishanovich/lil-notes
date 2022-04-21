import React, { Component } from "react";
import './searchPanel.css'

export default class SearchPanel extends Component {
    state = {
        term: ''
    }

    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({ term })
        console.log(term);
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        )
    }
}