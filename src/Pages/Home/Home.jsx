import React from 'react';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';
import Banner from '../../Component/Banner/Banner';
import States from '../../Component/States/States';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            
            <Banner></Banner>
            <States></States>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;