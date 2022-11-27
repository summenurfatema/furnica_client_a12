import React from 'react';

const ReportItemCard = ({ reportItem, handleDelete }) => {
    const { image, productName, productPrice } = reportItem
    return (

        <tr>

            <td>
                <div className="avatar offline">
                    <div className="w-24 rounded-full">
                        <img src={image} alt=' ' />
                    </div>
                </div>
            </td>
            <td className='font-semibold'>{productName}</td>
            <td className='font-semibold'>{productPrice} BDT</td>
            <td className='space-x-2'>
                <button onClick={() => handleDelete(reportItem)} className="btn btn-success">Delete</button>
            </td>
        </tr>
    );
};

export default ReportItemCard;