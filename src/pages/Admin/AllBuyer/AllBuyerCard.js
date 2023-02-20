import React from 'react';

const AllBuyerCard = ({ buyer, handleDelete }) => {
    const { displayName, email } = buyer



    return (
        <tr>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>
                <button onClick={() => handleDelete(buyer)} className="btn btn-sm bg-red-600">Delete</button>
            </td>
        </tr>
    );
};

export default AllBuyerCard;