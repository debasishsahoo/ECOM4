import React from 'react';
import SubNav from './Header/SubNav';
import Logo from './Header/Logo';
import Menu from './Header/Menu';


function Header(props) {
    return (
        <header>
            {/* Sub Navigation */}
            <SubNav />
            {/* /Sub Navigation */}

            {/* logo and ad break */}
            <Logo />
            {/* / logo and ad break */}
            <br />
            <Menu />
        </header>
    );
}

export default Header;