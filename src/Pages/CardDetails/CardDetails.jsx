import React from 'react';
import download from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png"
import { useLoaderData, useParams } from 'react-router';
import review from "../../assets/icon-review.png";
const CardDetails = () => {
    const { id } = useParams();
    const dataId = parseInt(id);
    const data = useLoaderData();
    const singleData = data.find(app => app.id === dataId)
    const { image, title, description, companyName, downloads,ratingAvg,reviews } = singleData;
    return (
        <div className='bg-gray-100'>
            <div className="flex p-20 gap-10">
                <div className="">
                    <img className='h-[350px] w-[350px]' src={image} alt="" />
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
                            <button className='ml-40 btn bg-[#00D390]'>Install Now (291 MB)</button>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    );
};

export default CardDetails;