"use client"
import React, { useState, useEffect } from 'react';

const OrderDetails = ({ params }) => {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch(`/api/orderId`);
                if (!response.ok) {
                    throw new Error('Failed to fetch order details');
                }
                const data = await response.json();
                console.log(data,"hii");
                setOrder(data);
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchOrder();
    }, [params.orderId]);


    console.log(params);
    if (!order) {
        return <div>Loading...
          {console.log("hi")}
        </div>;
    }

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg p-4 rounded-md mt-8">
          {console.log("hiinnnnnnnnn",order)}
            <h1 className="text-2xl font-bold mb-4">{order[0].name}</h1>
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Form Details:</h2>
                <p>{order[0].formDetails}</p>
            </div>
            <div>
            {console.log("hi")}
                <h2 className="text-lg font-semibold mb-2">Status:</h2>
                <p>{order[0].status}</p>
            </div>
        </div>
    );
};

export default OrderDetails;
