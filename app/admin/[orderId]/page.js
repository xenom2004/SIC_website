"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderDetails = ({ orderId }) => {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`/api/${orderId}`);
                setOrder(response.data);
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchOrder();
    }, [orderId]);

    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg p-4 rounded-md mt-8">
            <h1 className="text-2xl font-bold mb-4">{order.name}</h1>
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Form Details:</h2>
                <p>{order.formDetails}</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-2">Status:</h2>
                <p>{order.status}</p>
            </div>
        </div>
    );
};

export default OrderDetails;
