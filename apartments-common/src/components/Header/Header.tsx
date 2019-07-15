import React from 'react';
import './Header.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuIcon from '../MenuIcon/MenuIcon';
import Toolbar from '../Toolbar/Toolbar';
import { HeaderProps } from '../../models/HeaderProps.type';


const Header = (props: HeaderProps): JSX.Element => (
    <Toolbar>
        <header className="header">
            <nav className="mobile-only">
                <MenuIcon clickHandler={props.menuIconClickHandler} />
            </nav>
            <nav className="desktop-only">
                <NavigationItems items={props.navigationItems} />
            </nav>
        </header>
    </Toolbar>
);

export default Header;