import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <nav className="header">
        {/* logo on the left -->img */}
        <Link to="/">
            <img 
                className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="" 
            />
        </Link>

        {/* Search box */}
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"/>

        {/* 3 links */}
        {/* basket icon with number */}
    </nav>
  )
}

export default Header;