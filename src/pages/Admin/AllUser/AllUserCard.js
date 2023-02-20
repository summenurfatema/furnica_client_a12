import React from 'react';

const AllUserCard = ({ user, handleDelete }) => {
    const { displayName, email, role } = user
    return (
        <tr>
            <td className='font-semibold'>{displayName}</td>
            <td className='font-semibold'>{email}</td>
            <td className='font-semibold'>{role}</td>
            <td>
                <button onClick={() => handleDelete(user)} className="btn btn-sm bg-red-600">Remove</button>
            </td>
        </tr>
    );
};

export default AllUserCard;