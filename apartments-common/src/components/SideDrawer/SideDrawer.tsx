import React from 'react';

import NavigationItems from "../NavigationItems/NavigationItems";
import './SideDrawer.scss';
import { SideDrawerProps } from "../../models/SideDrawerProps.type";
import Backdrop from '../Backdrop/Backdrop';

const SideDrawer = (props: SideDrawerProps): JSX.Element => {


    const attachedClasses = props.showSideDrawer ?
        ["side-drawer", "open"] : ["side-drawer", "close"];

    return (
        <>
            <Backdrop
                showBackdrop={props.showSideDrawer}
                backdropClickHandler={props.backdropClickHandler}
            />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems items={props.navigationItems}/>
                </nav>
            </div>
        </>
    )
};

export default SideDrawer;