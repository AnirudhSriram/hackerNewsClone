import React from 'react';
import './header.css';
import Search from './search';

const Header = (props)=> {

    return (
        <header className="App-header">
        <div>
                <h1 className="title">Hacker News</h1>
        </div>
            <div>
              <Search />
            </div>
            
        </header>
    )

}

export default Header;