"use client"
import React, { useState, useEffect } from 'react';
 
import { useRouter, usePathname, useSearchParams,useNavigation } from 'next/navigation'
import HPLCForm from '../forms/chromatography/hplc/page';

const OrderDetails = ({ params }) => {
    const [order, setOrder] = useState(null);
    // const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const orderID = searchParams.get('id');
  



    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch(`/api/orderId/${orderID}`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                       
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch order details');
                }
                const data = await response.json();
                console.log(data,"hiihygyug");
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
        <div className="w-full px-24 mx-auto bg-white shadow-lg p-4 rounded-md mt-8">
          {console.log("hiinnnnnnnnn",order)}
            <h1 className="text-2xl font-bold mb-4">{order.name}</h1>
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Form Details:</h2>
                <p>{console.log(order.form_details)}
                <HPLCForm prop={order.form_details[20]}/>
                </p>
            </div>
            <div>
            {console.log("hi")}
                <h2 className="text-lg font-semibold mb-2">Status:</h2>
                <p>{order.status}</p>
            </div>
        </div>
    );
};

export default OrderDetails;
