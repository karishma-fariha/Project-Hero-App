import React, { useState } from 'react';
import { useLoaderData } from 'react-router';


const Installation = () => {
    const data = useLoaderData();
    const [install, setInstall] = useState(data);
    const handleUninstall = (id) => {
        const updated = install.filter(app => app.id !== id);
        setInstall(updated);
        localStorage.setItem('installedApps', JSON.stringify(updated));
        alert("App Uninstalled!");
    };


    return (
        <div>
            <div className='p-10'>
                <h1 className='text-3xl font-bold mb-4'>My Installations</h1>
                <div className="grid grid-cols-3 gap-4">
                    {install.map(app => (
                        <div key={app.id} className="border p-4 rounded-md shadow-sm">
                            <img src={app.image} alt={app.title} className="w-32 h-32 object-cover mx-auto" />
                            <h2 className="text-xl font-semibold mt-2">{app.title}</h2>
                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="btn bg-red-500 mt-3"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Installation;