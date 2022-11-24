import React from 'react';

const WishCard = ({ wish, handleDelete }) => {
    const { image, productName, productPrice } = wish;
    return (



        <tr>

            <td>
                <div className="avatar offline">
                    <div className="w-24 rounded-full">
                        <img src={image} alt=' ' />
                    </div>
                </div>
            </td>
            <td>{productName}</td>
            <td>{productPrice} BDT</td>
            <td className='space-x-2'>
                <button className="btn btn-sm">Add</button>
                <button onClick={() => handleDelete(wish)} className="btn btn-sm">Delete</button>
            </td>



        </tr>



    );
};

export default WishCard;