import React from 'react';
import download from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png"
import { Link } from 'react-router';

const Card = ({ singleCard }) => {
    const {image,title,ratingAvg,downloads,id,companyName}=singleCard
    return (
       <Link to={`/cardDetails/${id}`}>
        <div className='bg-white shadow-sm rounded-xl p-4'>
            <div className="p-4 bg-gray-200 rounded-xl">
                <img className='w' src={image} alt="" />
            </div>
            <div className="text-[16px] font-medium my-2">
                <h2>{companyName} : {title}</h2>
                 </div>
                <div className="flex justify-between items-center">
                    <button className='btn text-[#00D390]'><img className='w-3 h-3' src={download} alt="" /> {downloads}</button>
                    <button className='btn text-[#FF8811]'><img className='w-3 h-3' src={ratings} alt="" />{ratingAvg}</button>
                </div>
           
        </div>
        
       </Link>
    );
};


export default Card;