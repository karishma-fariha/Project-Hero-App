import React, { useState } from 'react';
import download from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
import { toast } from 'react-toastify';
import dropIcon from "../../assets/teenyicons_down-solid.png";


const Installation = () => {

    const [install, setInstall] = useState(
        JSON.parse(localStorage.getItem('installedApps')) || []
    );
    const [sort,setSort] = useState('');


    const handleSort = (type) => {
        setSort(type)
        if (type === "Low") {
            const sortedByLow = [...install ].sort((a, b) => parseInt(a.downloads) - parseInt(b.downloads));
            setInstall(sortedByLow);
           
        }
        if(type === "High"){
            const sortedByHigh =[...install].sort((a,b) => parseInt(b.downloads) - parseInt(a.downloads));
            setInstall(sortedByHigh);

        }
    }

    const handleUninstall = (id) => {
        const updated = install.filter(app => app.id !== id);
        setInstall(updated);
        localStorage.setItem('installedApps', JSON.stringify(updated));
        toast("App Uninstalled!");
    };

    return (
        <div>
            <div className='p-20 bg-gray-100'>
                <div className="text-center">
                    <h1 className='text-5xl font-bold py-2'>Your Installed Apps</h1>
                    <p className='text-[#627382] text-xl mb-8'>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>
                <div className="flex justify-between items-center mb-4"> 

                    <h1 className='text-xl font-bold'>{install.length} Apps Found</h1>
                       
                       <details className="dropdown">
                        <summary className="btn m-1">Sort By Size
                             <img src={dropIcon} alt="" />
                             {sort ? sort : ''}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a a onClick={() => handleSort("Low")}>Low to High</a></li>
                            <li><a a onClick={() => handleSort("High")}>High to Low</a></li>
                        </ul>
                    </details>
                </div>

                <div>
                    {install.length === 0 ?
                        (
                            <p className="text-center text-black font-semibold text-2xl">
                                No installed apps found
                            </p>
                        )
                        : (
                            install.map(app => (
                                <div
                                    key={app.id}
                                    className="p-3 rounded-xs shadow-sm flex justify-between items-center bg-white mb-8"
                                >
                                    <div className="flex gap-10">
                                        <img
                                            src={app.image}
                                            alt=""
                                            className="w-32 h-32 object-cover mx-auto"
                                        />
                                        <div>
                                            <h2 className="text-xl font-semibold my-2">
                                                {app.title}: {app.companyName}
                                            </h2>
                                            <div className="flex gap-2 items-center">
                                                <img className='w-3 h-3' src={download} alt="" />
                                                <span className='text-[#00D390]'>{app.downloads}</span>
                                                <img className='w-3 h-3' src={ratings} alt="" />
                                                <span className='text-[#FF8811]'>{app.ratingAvg}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleUninstall(app.id)}
                                        className="btn text-white bg-[#00D390]"
                                    >
                                        Uninstall
                                    </button>
                                </div>
                            ))
                        )}
                </div>
            </div>
        </div>

    );

};

export default Installation;
