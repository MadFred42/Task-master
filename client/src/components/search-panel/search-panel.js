import React, { useState } from 'react';

import './search-panel.css';

const SearchPanel = () => {
    const [term, setTerm] = useState('');

    return (
        <input 
        className="form-control search-panel search-input"
        type="text"
        placeholder="Wright something..."
        onChange={(e) => setTerm(e.target.value)} />
    ) 
}

export default SearchPanel;