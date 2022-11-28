import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SellerSection from '../SellerSection/SellerSection';

const AdminDashBoard = () => {
    const sellers = useLoaderData()

    useTitle('Seller-Furnica')


    // delete user

    const handleDelete = (seller) => {

        const agree = window.confirm('Are you ready to delete ?')
        if (agree) {
            fetch(`https://furnica-server.vercel.app/admin/Seller/${seller._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('Seller has been deleted !',
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
    // VERIFY SELLER

    const handleVerify = _id => {
        fetch(`https://furnica-server.vercel.app/users/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller has been verified !!!')
                    window.location.reload()
                }
            })
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
                            sellers.map(seller => <SellerSection
                                key={seller._id}
                                seller={seller}
                                handleDelete={handleDelete}
                                handleVerify={handleVerify}></SellerSection>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashBoard;