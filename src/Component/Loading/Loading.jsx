import React from 'react';

const Loading = () => {
    return (
        <div className='py-64 flex justify-center items-center'>
            <h1 className='text-8xl font-bold 
             text-[#632EE3]'>L
            <span className="loading loading-spinner loading-xl"></span>ading</h1>
        </div>
    );
};

export default Loading;