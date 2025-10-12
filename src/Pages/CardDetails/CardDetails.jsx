import React, { useState } from 'react';
import download from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png"
import { useLoaderData, useParams } from 'react-router';
import review from "../../assets/icon-review.png";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';
const CardDetails = () => {
    const { id } = useParams();
    const dataId = parseInt(id);
    const data = useLoaderData();
    const [installedApps, setInstalledApps] = useState(
        JSON.parse(localStorage.getItem('installedApps')) || []
    );

    const singleData = data.find(app => app.id === dataId);
    const isInstalled = installedApps.some(app => app.id === singleData.id);




    const handleInstall = () => {
        if (!isInstalled) {
            const updated = [...installedApps, singleData];
            setInstalledApps(updated);
            localStorage.setItem('installedApps', JSON.stringify(updated));
            toast(`${singleData.title} installed successfully!`);
        }
    };



    const { image, title, description, companyName, downloads, ratingAvg, reviews, size } = singleData;
    return (
        <div className='bg-gray-100'>
            <div className="flex p-20 pb-0 gap-10">
                <div className="">
                    <img className=' w-96 border object-cover' src={image} alt="" />
                </div>
                <div className="">
                    <div className="flex w-full flex-col">
                        <h1 className='text-4xl font-bold mb-2'>{title}:{description}</h1>
                        <p className='text-[#627382] text-xl mb-8'>Developed by <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>{companyName}</span> </p>
                        <div className="divider"></div>
                        <div className="flex justify-evenly items-center mt-8">
                            <div className="p-2">
                                <img className='w-10 h-10' src={download} alt="" />
                                <p className='text-[#627382] text-[16px]'>Downloads</p>
                                <h1 className='font-extrabold text-4xl'>{downloads}</h1>
                            </div>
                            <div className="">
                                <img className='w-10 h-10' src={ratings} alt="" />
                                <p className='text-[#627382] text-[16px]'>Average Ratings</p>
                                <h1 className='font-extrabold text-4xl'>{ratingAvg}</h1>
                            </div>
                            <div className="">
                                <img className='w-10 h-10' src={review} alt="" />
                                <p className='text-[#627382] text-[16px]'>Total Reviews</p>
                                <h1 className='font-extrabold text-4xl'>{reviews}</h1>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button
                                onClick={handleInstall}
                                disabled={isInstalled}
                                className='ml-40 text-white btn bg-[#00D390]'>
                                {isInstalled ? 'Installed' : `Install Now (${size} MB)`}

                            </button>

                        </div>
                    </div>

                </div>
            </div>
            <div className="">
                {/* divider */}
                <div className="divider mx-20"></div>
                <div className=" bg-gray-100 p-6">
                    <h2 className="text-2xl font-bold mb-6">Ratings</h2>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart layout="vertical" data={singleData.ratings} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                <XAxis
                                    type="number"
                                    tickFormatter={(value) => value}
                                    tick={{ fill: '#6b7280' }}
                                />
                                <YAxis type="category" dataKey="name"
                                    tick={{ fill: '#6b7280' }}
                                    width={80} />
                                <Tooltip cursor={{ fill: '#f3f4f6' }} />
                                <Bar
                                    dataKey="count" fill="#f59e0b"
                                    barSize={25}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="divider mx-20"></div>
            <div className="p-8">
                <h1 className='text-2xl font-semibold '>Description</h1>
                <p>{description}</p>
            </div>




        </div>
    );
};

export default CardDetails;