import React from 'react';
import appStore from '../../assets/Group (3).png';
import googlePlay from '../../assets/fi_16076057.png';
import heroImg from '../../assets/hero.png';

const Banner = () => {
    return (
        <div>
            <h1 className='text-center md:mb-2 md:p-4  font-extrabold md:text-7xl text-4xl'>We Build <br />
                <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'> Productive </span>Apps</h1>
            <p className='text-center text-[#627382] mb-6'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className=" flex justify-center items-center gap-8 mb-6">
               <div className="flex btn">
                <img src={googlePlay} alt="" />
                 <button> Google Play</button></div>
               <div className="flex btn">
                <img src={appStore} alt="" />
                 <button> App Store</button>
               </div>
               
            </div>
            <div className='flex items-center justify-center'><img className='h-2/6 w-fit md:h-2/5 md:w-3xl' src={heroImg} alt="" /></div>

        </div>
    );
};

export default Banner;