import React, { Component } from "react";
import './searchPanel.css'

export default class SearchPanel extends Component {
    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
            />
        )
    }
}