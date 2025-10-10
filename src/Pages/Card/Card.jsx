import React from 'react';
import download from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png"

const Card = ({ singleCard }) => {
    const {image,title,description,ratingAvg,downloads}=singleCard
    return (
        <div className='bg-white shadow-sm rounded-xl p-4'>
            <div className="p-4 bg-gray-200 rounded-xl">
                <img className='w' src={image} alt="" />
            </div>
            <div className="text-[16px] font-medium my-2">
                <h2>{title} : {description}</h2>
                 </div>
                <div className="flex justify-between items-center">
                    <button className='btn text-[#00D390]'><img className='w-3 h-3' src={download} alt="" /> {downloads}</button>
                    <button className='btn text-[#FF8811]'><img className='w-3 h-3' src={ratings} alt="" />{ratingAvg}</button>
                </div>
           
        </div>
        
    );
};


export default Card;