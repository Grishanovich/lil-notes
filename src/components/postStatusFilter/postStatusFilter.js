import React, { Component } from "react";
import './postStatusFilter.css'

export default class PostStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-primary">Все</button>
                <button type="button" className="btn btn-outline-secondary">Понравилось</button>
            </div>
        )
    }
}