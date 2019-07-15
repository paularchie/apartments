import Layout from "../components/Layout/Layout";
import { NavigationContextProvider } from "../context/NavigationContext";
import Test from "../components/Test/Test";
import router from 'next/router';

const Home = () => {

    const handleClick = () => {
        console.log('handle in home')
    }

    return (
        // <NavigationContextProvider value={{ navigationItemClicked: handleClick }}>
        <Test>
            <Layout>
                <div>Home</div>
            </Layout>
        </Test>
        // </NavigationContextProvider>
    );
}

export default Home;