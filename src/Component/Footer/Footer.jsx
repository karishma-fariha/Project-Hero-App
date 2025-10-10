import React from 'react';
import logo from '../../assets/logo.png';
import linkedIn from '../../assets/fi_145807.png';
import facebook from '../../assets/Group (2).png';
import xmail from '../../assets/fi_5969020.png'

const Footer = () => {
    return (
        <div className='bg-[#001931] px-20 py-9'>
            <div className="flex justify-between items-center">
                <div className="">
                    <a className="flex items-center text-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
                        <img className='w-10 h-10' 
                        src={logo} alt="" /> HERO.IO</a>
                </div>
                <div className="">
                    <p className='font-medium text-xl text-white'>Social Links</p>
                    <div className="m-2 flex items-center">
                        <img src={xmail} alt="" />
                        <img src={linkedIn} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </div>
            </div>
            <div className=""><p className='text-white text-xs text-center'>Copyright © 2025 - All right reserved</p></div>
        </div>
    );
};

export default Footer;