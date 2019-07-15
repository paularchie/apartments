
import React from 'react';
import './NavigationItem.scss';
import { useNavigationContext } from '../../../../../context/NavigationContext';

const NavigationItem = ({ active, link, children }/*: NavigationItemProps*/): JSX.Element => {

    const { navigationItemClicked } = useNavigationContext();

    return (
        <li className="navigation-item">
            <a
                className={active ? 'active' : ''}
                onClick={() => navigationItemClicked(link)}
            >
                {children}
            </a>
        </li>
    )
}

export default NavigationItem;