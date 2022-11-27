import React from 'react';

const SellerSection = ({ seller, handleDelete, handleVerify }) => {
    const { displayName, email } = seller
    return (
        <tr>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>
                <button onClick={() => handleVerify(seller._id)} className="btn btn-info mr-5">Verify</button>


                <button onClick={() => handleDelete(seller)} className="btn btn-error">Delete</button>
            </td>
        </tr>
    );
};

export default SellerSection;