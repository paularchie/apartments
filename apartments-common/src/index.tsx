import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Route, withRouter, HashRouter, Redirect } from 'react-router-dom';

import './styles.scss';
import Layout from "./components/Layout/Layout";
import Input from './components/Input/Input';
import { getNavigationItemsProps } from "./util/getNavigationItems";
import ContactForm from "./components/ContactForm/ContactForm";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import Editor from "./components/TextEditor/TextEditor";
import HomePage from "./components/HomePage/HomePage";



const Main = withRouter(({ history }) => {

    useEffect(() => {
        setCurrectRoute(history.location.pathname)
    }, [])

    const [showSideDrawer, setSideDrawerState] = useState<boolean>(false);
    const [currentRoute, setCurrectRoute] = useState('');


    const handleNavigationItemClick = (route: string) => {
        history.push(route);
        setCurrectRoute(route);
        setSideDrawerState(false);
    };

    const handleMenuIconClick = () => {
        setSideDrawerState(!showSideDrawer);
    }

    const handleBackdropClick = () => {
        setSideDrawerState(!showSideDrawer);
    }

    const getNavigationItemActiveState = (itemRoute: string): boolean => {
        return itemRoute === currentRoute;
    }

    return (
        <Layout
            navigationItems={getNavigationItemsProps(handleNavigationItemClick, getNavigationItemActiveState)}
            menuIconClickHandler={handleMenuIconClick}
            backdropClickHandler={handleBackdropClick}
            showSideDrawer={showSideDrawer}
        >
            <Route path='/' exact render={() => (<Redirect to="/home" />)} />
            <Route path='/home' component={HomePage} />
            <Route path='/galleries' component={GalleryPage} />
            <Route path='/contact' component={ContactForm} />
        </Layout>
    )
})

export default Main;

const App = (): JSX.Element => {

    return (
        <HashRouter>
            <Main />
        </HashRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
