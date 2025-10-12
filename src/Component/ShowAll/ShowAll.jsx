import React from 'react';
import { Link, useNavigate } from 'react-router';

const ShowAll = () => {
    const navigate =useNavigate();
    return (
        <div className=' flex items-center justify-center mb-2 md:p-10 bg-gray-100'>
            
            <a
             onClick={() => navigate('/aboutApps')}
             className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                Show All</a>
        
        </div>
    );
};

export default ShowAll;