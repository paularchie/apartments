import React from 'react';

import './NavigationItems.scss'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (): JSX.Element => (
    <ul className="navigation-items">
        <NavigationItem link="/home" active={true}>Home</NavigationItem>
        <NavigationItem link="/galleries" active={true}>Galleries</NavigationItem>
        <NavigationItem link="/contact" active={true}>Contact</NavigationItem>
    </ul>
);

export default NavigationItems;