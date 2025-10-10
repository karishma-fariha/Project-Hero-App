import React from 'react';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>Home</h1>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;