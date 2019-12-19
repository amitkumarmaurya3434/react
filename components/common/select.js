import React, { Component } from 'react';
export default class Select extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleChange = (e) => {
        this.props.sortByAsceDesc(e.target.value)

    }
    render() {
        return (
            <div className="input-group mb-2">
                <select className="custom-select" onChange={this.handleChange}>
                    <option defaultValue>Sort by ID</option>
                    <option value="Asce">ascending</option>
                    <option value="Desc">descending</option>
                </select>

            </div>
        );
    }
}
