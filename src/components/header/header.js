import React, { Component } from "react";
import './header.css'

export default class Header extends Component {
    render() {
        const { liked, allPosts } = this.props
        return (
            <div className="app-header d-flex align-items-center">
                <h1>ilya grishanovich</h1>
                <h2>{allPosts} записейь, из них понравилось {liked}</h2>
            </div>
        )
    }
}