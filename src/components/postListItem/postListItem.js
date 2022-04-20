import React, { Component } from "react";
import './postListItem.css'

export default class PostListItem extends Component {

    render() {

        const { label, onDelete, onToggleImportant, onToggleLiked, important, liked } = this.props

        let classNames = 'app-list-item d-flex justify-content-between'

        if (important) {
            classNames += ' important'
        }

        if (liked) {
            classNames += ' like'
        }

        return (
            <div className={classNames} >
                <span className="app-list-item-label"
                    onClick={onToggleLiked}
                >
                    {label}
                </span>
                <div className="d-flex justify-content-center align-item-center">
                    <button className="btn-star btn-sm"
                        onClick={onToggleImportant}
                    >
                        <i className="bi bi-star-fill"></i>
                    </button>
                    <button className="btn-trash btn-sm"
                        onClick={onDelete}
                    >
                        <i className="bi bi-trash-fill"></i>
                    </button>
                    <i className="bi bi-heart-fill"></i>
                </div>
            </div>
        )
    }
}