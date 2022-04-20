import React, { Component } from "react";
import './postAddForm.css'

export default class PostAddForm extends Component {
    render() {
        const { onAdd } = this.props

        return (
            <div className="bottom-panel d-flex">
                <input
                    type="text"
                    placeholder="О чем вы сейчас думаете?"
                    className="form-control new-post-labelF"
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary add-btn"
                    onClick={() => onAdd()}
                >Добавить</button>
            </div>
        )
    }
}
