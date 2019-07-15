import React from 'react';

import './NavigationItems.scss'
import NavigationItem from '../NavigationItem/NavigationItem';
import { NavigationItemsProps } from '../../models/NavigationItemsProps.type';

const NavigationItems = ({ items }: NavigationItemsProps): JSX.Element => {

    return (
        <ul className="navigation-items">
            {items.map((item, index) => <NavigationItem key={index} {...item} />)}
        </ul>
    );
}

export default NavigationItems;