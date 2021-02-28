import React from 'react';
import BusinessList from '../BusinessList/BusinessList.jsx';
import SearchBar from '../SearchBar/SearchBar';

import './App.css';

function App() {
    return ( <
        div className = "App" >
        <h1> ravenous </h1> 
        <SearchBar / >
        <BusinessList / >
        </div>
    );
}

export default App;