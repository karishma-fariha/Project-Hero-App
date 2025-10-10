import React, { Suspense } from "react";
import Card from "../Card/Card";

const Apps = ({ data }) => {
    return (
        <div className="p-20 bg-gray-100">
            <h1 className="text-center text-2xl font-bold mb-2">Trending Apps</h1>
            <p className="text-center text-gray-600 mb-6">
                Explore all trending apps on the market developed by us
            </p>

            <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {data.map((singleCard) => (
                        <Card key={singleCard.id} singleCard={singleCard}></Card>
                    ))}
                </div>
            </Suspense>
        </div>
    );
};

export default Apps;
