import React from 'react';

import SideDrawer from "../SideDrawer/SideDrawer";
import { LayoutProps } from '../../models/LayoutProps.type';
import Header from '../Header/Header';

const Layout = (props: LayoutProps): JSX.Element => {
   
    return (
        <>
            <Header
                menuIconClickHandler={props.menuIconClickHandler}
                navigationItems={props.navigationItems}
            ></Header>

            <SideDrawer
                showSideDrawer={props.showSideDrawer}
                backdropClickHandler={props.backdropClickHandler}
                navigationItems={props.navigationItems}
            ></SideDrawer>

            <main>{props.children}</main>

            <footer>&copy; {new Date().getFullYear()}</footer>
        </>
    )
}

export default Layout;
