import { NavigationContextProvider } from "../../context/NavigationContext";
import router from 'next/router';

const Test = ({children}) => {

    const handleClick = (link) => {
        router.push(link)
        console.log('!!!!!!', link)
    }

    return(<NavigationContextProvider value={{navigationItemClicked: handleClick}}>
        {children}
    </NavigationContextProvider>)

}

export default Test;