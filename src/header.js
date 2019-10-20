import React from 'react';
import './header.css';
const Header = ()=> {

    return (
        <header className="App-header">
        <div>
                <h1 className="title">Hacker News</h1>
        </div>
            <div>
                <input className="searchBar" placeholder="search"/>
            </div>
            
        </header>
    )

}

export default Header;