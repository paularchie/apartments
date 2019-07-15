import Layout from "../components/Layout/Layout";
import { Component } from "react";
import axios from 'axios';
import Error from './_error';
import { AboutPageProps } from "pages/interfaces";



class About extends Component {

    static async getInitialProps() {
        const res = await axios.get('https://react-my-burger-55e49.firebaseio.com/ingredients.json');
        const statusCode = res.status > 200 ? res.status : false;

        return { data: res.data, statusCode };

    }

    render() {

        const { statusCode } = this.props as AboutPageProps;

        if (statusCode) {
            return <Error statusCode={statusCode} />
        }

        return (
            <Layout title="About">
                <p>A JavaScript Software Engineer</p>
                <img src="../static/js-logo.png" alt="JavaScript logo" width="200px" />
            </Layout>

        )
    }
};

export default About;