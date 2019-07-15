import React from 'react';
import { useState } from "react";

import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";


export default function Layout({ children }): JSX.Element {

    const [showSideDrawer, setShowSideDrawer] = useState<boolean>(false);

    const handleBackdropClick = (): void => {
        setShowSideDrawer(false);
    }

    const handleMenuIconClick = (): void => {
        setShowSideDrawer(true);
    }

    return (
        <>

            <Toolbar
                menuIconClicked={handleMenuIconClick}
            ></Toolbar>

            <SideDrawer
                showSideDrawer={showSideDrawer}
                handleBackdropClick={handleBackdropClick}
            ></SideDrawer>

            <main>{children}</main>

            <footer>&copy; {new Date().getFullYear()}</footer>
        </>
    )
}
