import Layout from "../components/Layout/Layout";
import Gallery from "../components/Gallery/Gallery";
import axios from 'axios';
import { useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import Test from "../components/Test/Test";

const Galleries = (props) => {
    return (
        <Test>
        <Layout>
            <Gallery images={props.images}/>
        </Layout>
        </Test>
    )
};

Galleries.getInitialProps = async () => {
    let images: any[] = [];

    try {
        const response = await axios.get('http://localhost:4000/api/images');
        images = response.data;
    } catch (err) {
        images = []
    }

    return { images }
};

export default Galleries;