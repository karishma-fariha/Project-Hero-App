import React from 'react';
import error from "../../assets/error-404.png";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <img src={error} alt="" />
            </div>
            <div className="text-center">
                <h1 className='text-5xl font-semibold mb-2'>Oops, page not found!</h1>
                <p className='font-normal text-xl text-[#627382]'>The page you are looking for is not available.</p>

                <a className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] my-2">
                    Show All</a>

            </div>
        </div>
    );
};

export default ErrorPage;