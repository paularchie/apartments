
import React from 'react';

import './NavigationItem.scss';
import { NavigationItemProps } from '../../models/NavigationItemProps.type';

const NavigationItem = (props: NavigationItemProps): JSX.Element => {

    // this component doesn't use Link element because it's reused both in React and Next.js which have differnt routers
    // instead an event is emitted to the parent component, which handles the routing programmatically
    return (
        <li className="navigation-item">
            <a
                className={props.isActive(props.route) ? 'active' : ''}
                onClick={() => props.navigationItemClickHandler(props.route)}
            >
                {props.text}
            </a>
        </li>
    )
}

export default NavigationItem;