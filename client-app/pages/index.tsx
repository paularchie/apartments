import Home from "./home";

import axios from 'axios';
import { useEffect } from "react";


const Index = () => {

    useEffect(() => {
        axios.get('http://192.168.2.11:4000').then(x => console.log(x))
    }, [])

    return (<Home></Home>)
};

export default Index;