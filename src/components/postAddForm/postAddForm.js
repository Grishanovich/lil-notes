import React, { Component } from "react";
import './postAddForm.css'

export default class PostAddForm extends Component {

    state = {
        data: ""
    }

    onValueChange = (e) => {
        this.setState({
            data: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.data)
        this.setState({
            data: ""
        })
    }

    render() {
        const { onAdd } = this.props

        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                    onChange={this.onValueChange}
                    type="text"
                    placeholder="О чем вы сейчас думаете?"
                    className="form-control new-post-labelF"
                    value={this.state.data}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary add-btn"
                    onClick={() => onAdd}
                >Добавить</button>
            </form>
        )
    }
}
