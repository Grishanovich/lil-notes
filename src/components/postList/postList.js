import React, { Component } from "react";
import PostListItem from "../postListItem/postListItem";
import './postList.css'

export default class PostList extends Component {

    render() {

        const elements = this.props.posts.map((item) => {
            return (
                <li className="list-group-item"
                    key={item.id}
                >
                    <PostListItem
                        label={item.label}
                        important={item.important}
                        liked={item.like}
                        id={item.id}
                        onDelete={() => this.props.onDelete(item.id)}
                        onToggleImportant={() => this.props.onToggleImportant(item.id)}
                        onToggleLiked={() => this.props.onToggleLiked(item.id)}
                    />
                </li>
            )
        })

        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        )
    }
}