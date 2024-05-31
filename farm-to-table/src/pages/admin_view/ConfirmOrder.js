import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function ConfirmOrder(){
    const { orders, setOrders } = useOutletContext();

    function handleConfirmOrder(transactionId){
        const updatedOrders = orders.map(order => {
            if (order.transactionId === transactionId) {
                return { ...order, orderStatus: 1 }; 
            }
            return order;
        });
        setOrders(updatedOrders);
    }

    function handleCancelOrder(transactionId){
        const updatedOrders = orders.map(order => {
            if (order.transactionId === transactionId) {
                return { ...order, orderStatus: 2 };
            }
            return order;
        });
        setOrders(updatedOrders);
    }

    return (
        <>
            <div className="title-bar">
                <h3 className="mb-8 text-3xl font-bold">Confirm Order</h3>
            </div>
            <br></br>
            <div className="module-body">
                <div className="flex flex-col overflow-x-auto">
                <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                    <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-black">Transaction ID</th>
                            <th scope="col" className="px-6 py-4 text-black">Product ID</th>
                            <th scope="col" className="px-6 py-4 text-black">Order Quantity</th>
                            <th scope="col" className="px-6 py-4 text-black">Order Status</th>
                            <th scope="col" className="px-6 py-4 text-black">Email</th>
                            <th scope="col" className="px-6 py-4 text-black">Date ordered</th>
                            <th scope="col" className="px-6 py-4 text-black">Time</th>
                            <th scope="col" className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => (
                                <tr key={order.transactionId} className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                    <td className="whitespace-nowrap px-6 py-4">{order.transactionId}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{order.productId}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{order.orderQuantity}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{order.orderStatus}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{order.email}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{order.dateOrdered}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{order.time}</td>
                                    <td className="whitespace-nowrap py-4">
                                        {order.orderStatus === 0 ? (
                                            <button className="confirm-btn" onClick={() => handleConfirmOrder(order.transactionId)}>Confirm Order</button>
                                        ) : (
                                            order.orderStatus === 1 ? 'Confirmed' : 'Cannot confirm'
                                        )}
                                    </td>
                                    <td className="whitespace-nowrap py-4">
                                        {order.orderStatus === 0 ? (
                                            <button className="cancel-btn" onClick={() => handleCancelOrder(order.transactionId)}>Cancel Order</button>
                                        ) : (
                                            order.orderStatus === 2 ? 'Canceled' : 'Cannot cancel'
                                        )}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
            </div>
            <br></br>
        </>
    );
}
