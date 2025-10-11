import React, { Suspense } from 'react';
import Card from '../Card/Card';
import { useLoaderData, useNavigate } from 'react-router';

const AboutApps = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    console.log(data);
    const handleClick = (id) => {
        navigate(`/cardDetails/${id}`);
    };


    return (
        <div>
            <div className="text-center">
                <h1 className='text-5xl font-bold my-2'>Our All Applications</h1>
                <p className='text-[#627382] text-xl mb-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {data.map((singleCard) => (
                        <Card key={singleCard.id}
                            singleCard={singleCard}>
                            onClick={() => handleClick(singleCard.id)}
                        </Card>
                    ))}
                </div>
            </Suspense>

        </div>
    )
}

export default AboutApps;