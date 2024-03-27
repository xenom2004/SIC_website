"use client"
import React, { useState, useEffect } from 'react';

function Orders() {
    const [activeOrders, setActiveOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch('/api/Pendingrequest');
                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }
                const data = await response.json();
                setActiveOrders(data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch orders');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="border rounded-md p-8 shadow-md mb-6 flex flex-col">
        <div className="container mx-auto">
            {isLoading && <p>Loading orders...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {activeOrders.length > 0 && (
                <ul className="divide-y divide-gray-200">
                    {activeOrders.map((order) => (
                        <li key={order._id} className="py-4">
                            <p className="text-lg">{order.name}</p>
                            <p className="text-gray-500">ID: {order._id} | Status: {order.status}</p>
                        </li>
                    ))}
                </ul>
            )}
            {activeOrders.length === 0 && !isLoading && <p>No active orders found.</p>}
        </div>
        </div>
    );
}

export default Orders;
