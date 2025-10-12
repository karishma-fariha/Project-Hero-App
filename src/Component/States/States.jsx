import React from 'react';

const States = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] md:p-20 p-5'>
            <h1 className='font-bold md:text-6xl text-3xl text-white text-center mb-5'>Trusted by Millions, Built for You</h1>
            <div className="md:flex md:justify-evenly md:items-center">
                <div className="md:p-4">
                    <p className='text-center md:text-xl font-normal text-white'>Total Downloads</p>
                    <h1 className='text-center font-extrabold md:text-6xl text-4xl text-white'>29.6M</h1>
                    <p className='text-center md:text-xl font-normal text-white'>21% more than last month</p>
                </div>
                <div className="md:p-4">
                    <p className='text-center md:text-xl font-normal text-white'>Total Reviews</p>
                    <h1 className='text-center font-extrabold md:text-6xl text-4xl text-white'>906K</h1>
                    <p className='text-center md:text-xl font-normal text-white'>46% more than last month</p>
                </div>
                <div className="md:p-4">
                    <p className='text-center md:text-xl font-normal text-white'>Active Apps</p>
                    <h1 className='text-center font-extrabold md:text-6xl text-4xl text-white'>132+</h1>
                    <p className='text-center md:text-xl font-normal text-white'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default States;