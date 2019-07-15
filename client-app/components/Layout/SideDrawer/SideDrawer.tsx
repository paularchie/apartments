import React from 'react';

import NavigationItems from "../Toolbar/NavigationItems/NavigationItems";
import './SideDrawer.scss';
import { SideDrawerProps } from "../../../models/SideDrawerProps";
import Backdrop from '../../shared/Backdrop/Backdrop';

const SideDrawer = ({ showSideDrawer, handleBackdropClick }: SideDrawerProps): JSX.Element => {

    const attachedClasses = showSideDrawer ?
        ["side-drawer", "open"] : ["side-drawer", "close"];

    return (
        <>
            <Backdrop show={showSideDrawer} clicked={handleBackdropClick} />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    )
};

export default SideDrawer;