import React from 'react';

import { createContext, useContext, Context } from "react";
// import router from 'react-router-dom';


const initialContextProps = {
    navigationItemClicked: (link: string) => {
        // router.push(link);
        console.log('handle in context', link)
    }
}

const NavigationContext: Context<any> = createContext(initialContextProps);

export const NavigationContextProvider = ({ children, value }) => (
    <NavigationContext.Provider value={value} >
        {children}
    </NavigationContext.Provider>
);

export const useNavigationContext = () => useContext(NavigationContext);

