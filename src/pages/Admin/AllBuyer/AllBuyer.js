import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import AllBuyerCard from './AllBuyerCard';

const AllBuyer = () => {
    const buyers = useLoaderData()


    // delete user

    const handleDelete = (buyer) => {

        const agree = window.confirm('Are you ready to delete ?')
        if (agree) {
            fetch(`https://furnica-server.vercel.app/admin/Buyer/${buyer._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('Buyer has been deleted !',
                            {

                                style: {
                                    borderRadius: '10px',
                                    background: '#333',
                                    color: '#fff',
                                },
                            }
                        );; window.location.reload()

                    }
                })
        }

    }

    return (
        <div className='flex flex-col items-center'>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map(buyer => <AllBuyerCard
                                key={buyer._id}
                                buyer={buyer}
                                handleDelete={handleDelete}
                            ></AllBuyerCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;