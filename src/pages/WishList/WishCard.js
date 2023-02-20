import React from 'react';

const WishCard = ({ wish, handleDelete }) => {
    const { image, productName, productPrice } = wish;
    return (



        <tr>

            <td className='w-1/4'>
                <div className="avatar offline">
                    <div className="w-24 rounded-full">
                        <img src={image} alt=' ' />
                    </div>
                </div>
            </td>
            <td className='font-semibold w-1/4'>{productName}</td>
            <td className='font-semibold w-1/4'>{productPrice} BDT</td>
            <td className='space-x-2 w-1/4'>
                <button className="btn bg-[#0891b2] btn-sm ">Pay</button>
                <button onClick={() => handleDelete(wish)} className="btn btn-sm bg-red-600">Delete</button>
            </td>
        </tr>



    );
};

export default WishCard;