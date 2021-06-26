import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        const {isLoggedIn} = this.props;
        if (isLoggedIn) {
            return (
                <input 
                className="form-control search-panel search-input"
                type="text"
                placeholder="Wright something..."
                onChange={this.onUpdateSearch} />
            )
        } else {
            return null
        }
    }
}