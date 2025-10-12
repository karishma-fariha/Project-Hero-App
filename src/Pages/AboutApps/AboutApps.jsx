import React, { Suspense, useState } from 'react';
import Card from '../Card/Card';
import notFound from '../../assets/App-Error.png';
import { useLoaderData, useNavigate } from 'react-router';

const AboutApps = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    const [search, setSearch] = useState('');

    const filteredApp = (data || []).filter(app =>
        app.companyName.toLowerCase().includes(search.toLowerCase()) ||
        app.title.toLowerCase().includes(search.toLowerCase())
    );



    const handleClick = (id) => {
        navigate(`/cardDetails/${id}`);
    };


    return (
        <div className='bg-gray-100 p-20'>
            <div className="text-center">
                <h1 className='text-5xl font-bold py-2'>Our All Applications</h1>
                <p className='text-[#627382] text-xl mb-8'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="flex justify-between items-center pb-6">
                <h1 className='text-2xl font-semibold'>(<span>{filteredApp.length}</span>) Apps Found</h1>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>

            </div>
            <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {filteredApp.map((singleCard) => (
                        <Card key={singleCard.id}
                            singleCard={singleCard}>
                            onClick={() => handleClick(singleCard.id)}
                        </Card>
                    ))}
                </div>
                {filteredApp.length === 0 && (
                    <div className="">
                        <div className="flex justify-center items-center">
                            <img src={notFound} alt="" />
                        </div>
                        <h1 className='text-5xl font-semibold text-center'>OPPS!! APP NOT FOUND</h1>
                        <p className='text-center text-xl text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                        <div className="text-center my-3">
                            <a className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                                Go Back!</a>
                        </div>
                    </div>

                )}

            </Suspense>

        </div>
    )
}

export default AboutApps;