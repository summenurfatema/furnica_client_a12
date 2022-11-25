import React from 'react';

const MyProductCard = ({ product, handleDelete }) => {
    const { img, productName } = product;
    return (



        <tr>

            <td>
                <div className="avatar offline">
                    <div className="w-24 rounded-full">
                        <img src={img} alt=' ' />
                    </div>
                </div>
            </td>
            <td>{productName}</td>
            <td className='space-x-2'>
                <button className="btn btn-sm">Make it Sold</button>
                <button className="btn btn-sm">Advertisement</button>
                <button onClick={() => handleDelete(product)} className="btn btn-sm">Delete</button>
            </td>



        </tr>



    );
};

export default MyProductCard;