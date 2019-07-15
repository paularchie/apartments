import React from 'react';

import './MenuIcon.scss';
import { MenuIconProps } from '../../../../models/MenuIconProps.type';

const MenuIcon = ({ clicked }: MenuIconProps): JSX.Element => (
    <div className="container" onClick={clicked}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
    </div>
);

export default MenuIcon;
