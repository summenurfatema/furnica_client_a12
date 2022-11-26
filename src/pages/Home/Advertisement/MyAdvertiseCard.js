import React from 'react';

const MyAdvertiseCard = ({ advertise, handleDelete }) => {
    const { img, productName } = advertise
    console.log(advertise)
    return (
        <tr>
            <td>
                <div className="avatar offline">
                    <div className="w-24 rounded-full">
                        <img src={img} alt=' ' />
                    </div>
                </div>
            </td>
            <td className='text-xl font-bold'>{productName}</td>
            <td className='space-x-2'>

                <button onClick={() => handleDelete(advertise)} className="btn btn-error">Delete</button>
            </td>
        </tr>
    );
};

export default MyAdvertiseCard;