import React from 'react';

import './search-panel.css';

const SearchPanel = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <input 
            className="form-control search-panel search-input"
            type="text"
            placeholder="Wright something..."></input>
        )
    } else {
        return <div></div>
    }
}

export default SearchPanel;