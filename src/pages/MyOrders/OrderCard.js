import React from 'react';

const OrderCard = ({ booking, handleDelete }) => {
    const { _id, buyerName, productName, productPrice, buyerPhone, meetingLocation } = booking;
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Phone</th>
                        <th>Meeting location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>

                        <td className='font-semibold'>{buyerName}</td>
                        <td className='font-semibold'>{productName}</td>
                        <td className='font-semibold'>{productPrice}</td>
                        <td className='font-semibold'>{buyerPhone}</td>
                        <td className='font-semibold'>{meetingLocation}</td>
                        <td >
                            <button onClick={() => handleDelete(booking)} className="btn btn-error">Delete</button>
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default OrderCard;