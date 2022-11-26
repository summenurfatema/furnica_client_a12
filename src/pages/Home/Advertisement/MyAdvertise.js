import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/UserContext';
import MyAdvertiseCard from './MyAdvertiseCard';

const MyAdvertise = () => {
    const { user } = useContext(AuthContext)
    const [advertises, setAdvertises] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/advertise?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdvertises(data)
            })
    }, [user?.email])


    // delete product
    const handleDelete = (advertise) => {
        const agree = window.confirm('Are you sure to delete ?')
        if (agree) {
            fetch(`http://localhost:5000/advertise/${advertise._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('This item removed from Advertisement section successfully !',
                            {
                                style: {
                                    borderRadius: '10px',
                                    background: '#333',
                                    color: '#fff',
                                },
                            }
                        );
                        window.location.reload()
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
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            advertises.map(advertise =>
                                <MyAdvertiseCard
                                    advertise={advertise}
                                    handleDelete={handleDelete}
                                ></MyAdvertiseCard>

                            )}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAdvertise;