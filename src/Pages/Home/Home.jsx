import React from 'react';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';
import Banner from '../../Component/Banner/Banner';
import States from '../../Component/States/States';
import ShowAll from '../../Component/ShowAll/ShowAll';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            
            <Banner></Banner>
            <States></States>
            <Apps data={data}></Apps>
            <ShowAll></ShowAll>
        </div>
    );
};

export default Home;