import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';
import MenuIcon from './MenuIcon/MenuIcon';
import { ToolbarProps } from '../../../models/ToolbarProps';
import './Toolbar.scss';

const Toolbar = ({ menuIconClicked }: ToolbarProps): JSX.Element => (
    <header className="toolbar">
        <nav className="mobile-only">
            <MenuIcon clicked={menuIconClicked}/>
        </nav>
        <nav className="desktop-only">
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;